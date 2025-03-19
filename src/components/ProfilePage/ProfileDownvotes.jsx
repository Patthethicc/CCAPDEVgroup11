import API from "../../url.js";
import { useState, useEffect, useCallback } from "react";
import Post from "../Home/Post.jsx";

export default function ProfileDownvotes({ userData }) {
  const [posts, setPosts] = useState([]);
  const userId = userData.user_id;

  const getDownvotedPosts = useCallback(async () => {
    try {
      const response = await fetch(`${API}/user/${userId}/downvotes`, {
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
    getDownvotedPosts();
  }, [getDownvotedPosts]);


  return (
    <div className="content">
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          onDelete={getDownvotedPosts}
          handleVote={() => {}}
        />
      ))}
    </div>
  );
}
