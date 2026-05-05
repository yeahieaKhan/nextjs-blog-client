import { blogService } from "@/services/blog.service";
import React from "react";

const SingleBlogs = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const { data } = await blogService.getSingleBlogById(id);

  console.log(id);
  console.log("Data fetched single data", data);

  return (
    <div>
      <h2>{data?.data?.title}</h2>
    </div>
  );
};

export default SingleBlogs;
