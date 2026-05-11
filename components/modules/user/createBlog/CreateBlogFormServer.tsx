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

const CreateBlogFormServer = () => {
  const crateBlog = async (formData: FormData) => {
    "use server";

    const title = formData.get("title")?.toString();
    console.log(title);
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
              <Label htmlFor="slug">Slug</Label>
              <Input name="slug" id="slug" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input name="category" id="category" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">Image URL</Label>
              <Input name="image" id="image" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Short Description</Label>
              <Textarea></Textarea>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <textarea name="content" id="content" rows={10} />
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
