import React from "react";

const SingleBlogs = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  console.log(id);
  return (
    <div>
      <h2>This is single blog {id}</h2>
    </div>
  );
};

export default SingleBlogs;
