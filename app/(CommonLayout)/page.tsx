import { UserService } from "@/services/userService";

export default async function Home() {
  const { data } = await UserService.getSession();
  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      this is home page
    </div>
  );
}
