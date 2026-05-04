import BlogCard from "@/components/modules/Homepages/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/type";

export default async function Home() {
  const res = await blogService.getAllPost();

  console.log("API RESPONSE:", res);

  const posts = res?.data; // 👈 IMPORTANT FIX

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
      {posts?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
