import ProfileHeader from "../components/ViewPost/ProfileHeader.jsx";
import PostDetails from "../components/ViewPost/PostDetails.jsx";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import API from "../url.js";

// last modified: Feb 12 2025
export default function ViewPost() {
  const { postId } = useParams();
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(1);
  const [post, setPost] = useState();

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
      setPosts(result.posts);
      setTotalPages(Number(result.total_pages));
      setCurrentPage(Number(result.current_page));
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
    },[current_page]);

    useEffect(() => {
      if (!postId) {
        console.error("No ID found in URL");
        return;
      }
  
      const fetchData = async () => {
        try {
          const response = await fetch(`${API}/${postId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
  
          if (!response.ok) {
            throw new Error("Failed to fetch project data.");
          }
  
          const projectData = await response.json();
          setPost(projectData)
        } catch (error) {
          console.error("Error fetching project data: ", error.message);
        } 
      };
  
      fetchData();
    }, [postId]);

  return (
    <>
      <div className="viewpost-page">
        <ProfileHeader key={post?.author_id || null} author_id={post?.author_id || null}/>
        <PostDetails key={postId} postId={postId} onDelete={getPosts} />
      </div>
    </>
  );
}

ViewPost.propTypes = {
  onDelete: PropTypes.func.isRequired,
}