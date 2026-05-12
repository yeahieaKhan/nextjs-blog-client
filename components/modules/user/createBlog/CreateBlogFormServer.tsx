import React from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import { cookies } from "next/headers";

const CreateBlogFormServer = () => {
  // SERVER ACTION
  const createBlog = async (formData: FormData) => {
    "use server";

    // get form values
    const title = formData.get("title")?.toString();
    const content = formData.get("content")?.toString();
    const thumbnail = formData.get("thumbnail")?.toString();
    const tags = formData.get("tags")?.toString();

    // create payload
    const blogData = {
      title,
      content,
      thumbnail,
      isFeatured: true,
      status: "PUBLISHED",
      tags: tags
        ?.split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    try {
      // get cookies
      const cookieStore = await cookies();

      // send data to backend
      const res = await fetch("http://localhost:5000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          cookie: cookieStore.toString(),
        },
        body: JSON.stringify(blogData),
      });

      const data = await res.json();

      console.log("SUCCESS:", data);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create AI Blog</CardTitle>

          <CardDescription>
            Write and publish your AI related article.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form id="blog-form" action={createBlog} className="space-y-6">
            {/* TITLE */}
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>

              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Enter blog title"
                required
              />
            </div>

            {/* THUMBNAIL */}
            <div className="space-y-2">
              <Label htmlFor="thumbnail">Thumbnail URL</Label>

              <Input
                type="text"
                name="thumbnail"
                id="thumbnail"
                placeholder="https://example.com/image.jpg"
                required
              />
            </div>

            {/* CONTENT */}
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>

              <Textarea
                name="content"
                id="content"
                placeholder="Write your blog content..."
                className="min-h-[150px]"
                required
              />
            </div>

            {/* TAGS */}
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>

              <Input
                type="text"
                name="tags"
                id="tags"
                placeholder="react,nextjs,prisma"
              />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          <Button type="submit" form="blog-form" className="w-full">
            Submit Blog
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogFormServer;
