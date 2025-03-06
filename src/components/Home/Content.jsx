import Post from "./Post.jsx";
import "./Content.css";
import API from "../../url.js";
import { useState, useEffect } from "react";

export default function Content() {
  const [posts, setPosts] = useState([]);

  useEffect(function () {
    const getPosts = async function () {
      try {
        const response = await fetch(`${API}/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Error getting all posts.");
        }

        const result = await response.json();
        console.log(result);
        setPosts(result);
      } catch (err) {
        console.error("Error getting data: " + err.message);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="content">
      {posts.map((post, index) => (
        <Post key={post.id || index} post={post} />
      ))}
    </div>
  );
}
