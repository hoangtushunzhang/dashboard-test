import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import posts from "@/data/posts";
import Link from "next/link";
import { Button } from "../ui/button";
import { Post } from "@/types/posts";

interface PostSTableProps {
  limit?: number;
  title?: string;
}
const PostsTable = ({ title, limit }: PostSTableProps) => {
  // Sort posts in desc order based on date
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //   Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>A list of recent posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              View
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map(({ id, title, author, date }) => {
            return (
              <TableRow key={id}>
                <TableCell>{title}</TableCell>
                <TableCell className="hidden md:table-cell">{author}</TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  {date}
                </TableCell>
                <TableCell className="text-right hidden md:table-cell">
                  <Link href={`/posts/edit/${id}`}>
                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
