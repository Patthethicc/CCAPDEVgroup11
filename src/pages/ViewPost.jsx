import ProfileHeader from "../components/ViewPost/ProfileHeader.jsx";
import PostDetails from "../components/ViewPost/PostDetails.jsx";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import API from "../url.js";

// last modified: Feb 12 2025
export default function ViewPost() {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(1);

  const getPosts = useCallback(async function () {
    try {
      const response = await fetch(`${API}/?p=${current_page}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error getting all posts.");
      }

      const result = await response.json();
      console.log(result);
      setPosts(result.posts);
      setTotalPages(Number(result.total_pages));
      setCurrentPage(Number(result.current_page));
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
    },[current_page]);


  return (
    <>
      <div className="viewpost-page">
        <ProfileHeader />
        <PostDetails key={postId} postId={postId} onDelete={getPosts} />
      </div>
    </>
  );
}

ViewPost.propTypes = {
  onDelete: PropTypes.func.isRequired,
}