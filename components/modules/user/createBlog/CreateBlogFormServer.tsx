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
  const crateBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title")?.toString();
    const category = formData.get("category")?.toString();
    const description = formData.get("description")?.toString();
    const content = formData.get("content")?.toString();
    const tags = formData.get("tags")?.toString();

    const blogData = {
      title,
      category,
      description,
      content,
      tags: tags
        ?.split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    // data send to backend
    const cookieStore = await cookies();

    const res = await fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        cookie: cookieStore.toString(),
      },
      body: JSON.stringify(blogData),
    });

    console.log(res);
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
          <form id="blog-form" action={crateBlog} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input name="title" id="title" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input name="category" id="category" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea name="description"></Textarea>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea name="content"></Textarea>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input name="tags" id="tags" />
            </div>
          </form>
        </CardContent>

        <CardFooter>
          {/* ✅ Submit Button */}
          <Button type="submit" form="blog-form" className="w-full">
            Submit Blog
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateBlogFormServer;
