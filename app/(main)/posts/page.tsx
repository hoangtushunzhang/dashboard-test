import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/ui/BackButton";
import React from "react";

const Postspage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination/>
    </>
  );
};

export default Postspage;
