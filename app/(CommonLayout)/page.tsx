import { blogService } from "@/services/blog.service";

export default async function Home() {
  // const { data } = await UserService.getSession();
  const { data } = await blogService.getAllPost();
  console.log("This is form blog url", data);

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      this is home page
    </div>
  );
}
