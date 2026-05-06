"use client";
import { getBlog } from "@/actions/blog.action";
import { useEffect, useState } from "react";

const AboutPage = () => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));

  const [data, setData] = useState();
  const [error, setError] = useState<{ message: string } | null>(null);
  console.log("data faetch about", data);

  useEffect(() => {
    (async () => {
      const { data } = await getBlog();
      setData(data);
    })();
  }, []);

  return <div>this is about page</div>;
};
export default AboutPage;
