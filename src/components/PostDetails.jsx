import React, { use } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../contexts/postContext";

export default function PostDetails() {
  const posts = useContext(postsContext);

  const { postId } = useParams();
  const post = posts.find((p) => {
    return p.id === Number(postId); // نتأكد ان التحقق يكون بالارقام لأن useParams يعطينا القيمة بصورة نصية
  });
  console.log(post);
  return (
    <div>
      <h1>Post Details Page</h1>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
