import API from "../../url.js";
import { useState, useEffect, useCallback } from "react";
import Post from "../Home/Post.jsx";

export default function ProfileUpvotes({ userData }) {
  const [posts, setPosts] = useState([]);
  const userId = userData._id;

  const getUpvotedPosts = useCallback(async () => {
    try {
      const response = await fetch(`${API}/user/${userId}/upvotes`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error getting upvoted posts.");
      }

      const result = await response.json();
      setPosts(result.posts);
    } catch (err) {
      console.error("Error getting upvoted posts: " + err.message);
    }
  }, [userId]);

  useEffect(() => {
    getUpvotedPosts();
  }, [getUpvotedPosts]);


  return (
    <div className="content">
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          onDelete={getUpvotedPosts}
          handleVote={() => {}}
        />
      ))}
    </div>
  );
}
