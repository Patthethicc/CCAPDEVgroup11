import "./PostActions.css";
import {
  faArrowUp,
  faArrowDown,
  faComments,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function PostAction(props) {
  const [comment, setComment] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.userId;

  const handleAddComment = async (e) => {
    e.preventDefault();

    if (!comment.trim()) return; // Avoid empty comments

    try {
      const response = await fetch("http://localhost:3000/comments/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userId,
          post_id: props.projectId,
          content: comment,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Comment added:", data);
        setComment("");
      } else {
        console.error("Failed to add comment:", data.message);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <>
      <div className="post-actions-buttons">
        <button className="post-upvote-button">
          <FontAwesomeIcon icon={faArrowUp} />
          &nbsp;2.5k
        </button>
        <button className="post-downvote-button">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className="post-comment-button">
          <FontAwesomeIcon icon={faComments} />
          &nbsp;24
        </button>
        <button className="post-share-button">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
      <form onSubmit={handleAddComment}>
        <input
          className="post-add-comment"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </form>
    </>
  );
}
