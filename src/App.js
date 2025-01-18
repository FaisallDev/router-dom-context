import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./components/Hello";
import Home from "./components/Home";
import PostList from "./components/PostList";
import PostDetails from "./components/PostDetails";
import { postsContext } from "./contexts/postContext";
import NotFound from "./components/NotFound";
import NewPost from "./components/NewPost";
import DeletePost from "./components/DeletePost";
import PostLayout from "./components/PostLayout";

function App() {
  let postsData = [
    {
      id: 1,
      title: "Hello World",
      body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 2,
      title: "Hello World Second",
      body: " Second lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: 3,
      title: "Hello From Third Place",
      body: "Third lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];
  return (
    <postsContext.Provider value={postsData}>
      <div className="App">
        {/* ROUTES */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Link to={"/"}>
            <button style={{ fontSize: "30px" }}>Home</button>
          </Link>
          <Link to={"/hello"}>
            <button style={{ fontSize: "30px" }}>Hello</button>
          </Link>
          <Link to={"/posts"}>
            <button style={{ fontSize: "30px" }}>Post</button>
          </Link>
        </div>

        <Routes>
          <Route path="/hello" element={<Hello />} />
          {/* nested routes  Start*/}
          <Route path="posts" element={<PostLayout />}>
            <Route index element={<PostList />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path="new" element={<NewPost />} />
            <Route path="delete" element={<DeletePost />} />
          </Route>
          {/* nested routes  End*/}
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </postsContext.Provider>
  );
}

export default App;
