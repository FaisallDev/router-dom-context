import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>(404) Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link to="/">
        <button>
          <p>back to the home page</p>
        </button>
      </Link>
    </>
  );
}
