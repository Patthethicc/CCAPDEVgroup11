import "./PostDetails.css";

import TitleDeadline from "./TitleDeadline.jsx";
import CaptionImage from "./CaptionImage";
import PostAction from "./PostActions";
import CommentSection from "./CommentSection";
import API from "../../url.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export default function PostDetails({ onDelete }) {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("Status");
  const [deadlength, setDeadLength] = useState(0);
  const [file, setFile] = useState(null);
  const [upvote, setUpvote] = useState(0);
  const [downvote, setDownvote] = useState(0);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setTitle(projectData.title);
        setBody(projectData.content);
        setProgress(projectData.deadline.progress);
        setDeadLength(projectData.deadline.deadline_length);
        setFile(projectData.image || null);
        setUpvote(projectData.upvotes);
        setDownvote(projectData.downvotes);
        setComments(projectData.comments || null);
      } catch (error) {
        console.error("Error fetching project data: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  // render new comments
  const handleNewComment = (newComment) => {
    setComments((prevComments) => [...prevComments, newComment]);
  };

  const handleVote = async (type) => {
    try {
      const response = await fetch(`${API}/vote/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });

      if (!response.ok) {
        throw new Error("Error handling upvotes/downvotes.");
      }

      const result = await response.json();
      setUpvote(result.upvotes);
      setDownvote(result.downvotes);
    } catch (err) {
      console.error("Error handling upvoting/downvoting: " + err.message);
    }
  };

  return (
    <div className="post-details-container">
      <TitleDeadline
        key={postId}
        title={title}
        progress={progress}
        deadlength={deadlength}
        onDelete={onDelete}
        id={postId}
      />
      <CaptionImage body={body} file={file} />
      <PostAction
        projectId={postId}
        upvote={upvote}
        downvote={downvote}
        handleVote={handleVote}
      />
      <CommentSection projectId={postId} />
    </div>
  );
}

PostDetails.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
