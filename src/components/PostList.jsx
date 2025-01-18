import React from "react";
import { Link } from "react-router-dom";
import { postsContext } from "../contexts/postContext";
import { useContext } from "react";

export default function PostList() {
  const posts = useContext(postsContext);
  let PostList = posts.map((post) => {
    return (
      <Link key={post.id} to={`/posts/${post.id}`}>
        <div
          key={post.id}
          style={{
            background: "orange",
            padding: "10px",
            borderRadius: "20px",
            margin: "10px",
          }}
        >
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });
  return <>{PostList}</>;
}
