import React from "react";
import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <>
      <h1>Hello World</h1>
      <div
        style={{
          background: "orange",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        <Link to={"/"}>
          <h1>Go To Home Page</h1>
        </Link>
      </div>
    </>
  );
}
