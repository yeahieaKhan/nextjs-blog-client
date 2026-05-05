// import { blogService } from "@/services/blog.service";
// import React from "react";

// const SingleBlogs = async ({ params }: { params: { id: string } }) => {
//   const { id } = await params;

//   const { data } = await blogService.getSingleBlogById(id);

//   console.log(id);
//   console.log("Data fetched single data", data);

//   return (
//     <div>
//       <h2>{data?.data?.title}</h2>
//     </div>
//   );
// };

// export default SingleBlogs;

import { blogService } from "@/services/blog.service";
import React from "react";

const SingleBlogs = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const response = await blogService.getSingleBlogById(id);
  const post = response.data.data; // ⚠️ important
  console.log("post data fetched", post);

  if (!post) {
    return <div>No Post Found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-5">
      {/* Thumbnail */}
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      {/* Meta Info */}
      <div className="text-gray-500 text-sm mb-4">
        <p>Author: {post.authorId}</p>
        <p>Views: {post.views}</p>
        <p>Status: {post.status}</p>
        <p>Created: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>

      {/* Content */}
      <p className="text-lg mb-4">{post.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag: string, index: number) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Comments */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Comments</h2>
        {post.comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          post.comments.map((comment: any, i: number) => (
            <div key={i} className="border p-2 mb-2 rounded">
              {comment.text}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SingleBlogs;
