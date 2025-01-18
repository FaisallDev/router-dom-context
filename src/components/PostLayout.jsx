import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function PostLayout() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            background: "Green",
            marginTop: "20px",
            // margin: "3px",
            // borderRadius: "20px",
          }}
        >
          <h1>Post Layout Header</h1>
          <Link to={"new"}>
            <button>Create Post</button>
          </Link>
          <Link to={"delete"}>
            <button>Delete Post</button>
          </Link>
        </div>
        <div style={{ margin: "50px" }}>
          <Outlet />
        </div>
        <div style={{ background: "Green", padding: "5px" }}>
          <h1>Post Layout Footer</h1>
        </div>
      </div>
    </>
  );
}
