import "./Comments.css";
import CommentActions from "./CommentActions.jsx"; // contains upvote and downvote
import CommentDropDown from "./CommentDropDown"; // contains edit and delete
import ReplyForm from "./ReplyForm"; // New component for replies
import { useState, useEffect, React } from "react";
import API from "../../url.js";

export default function Comments(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState("");
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);
  const [refreshReplies, setRefreshReplies] = useState(false);
  
  useEffect(() => {
    if (showReplies) {
      fetchReplies(); // Fetch replies immediately when replies are shown
  
      // Set up interval to refresh replies every 3 seconds
      const interval = setInterval(() => {
        fetchReplies();
      }, 3000);
  
      return () => clearInterval(interval); // Cleanup when component unmounts or replies are hidden
    }
  }, [showReplies, props.commentId]); // Run when replies are toggled or the comment ID changes
  
  const handleEdit = () => {
    setNewContent(props.comment);
    setIsEditing(true);
  };

  // console.log("Props in Comments.jsx:", props);


  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (!newContent.trim()) return; // Prevent empty input

      try {
        console.log("props.commentId: " + props.commentId);
        const response = await fetch(`${API}/comment/edit/${props.commentId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: props.userId._id,
            content: newContent,
          }),
        });

        if (!response.ok) throw new Error("Failed to update comment");

        console.log("Comment updated successfully");

        props.onUpdate(props.commentId, newContent);

        setIsEditing(false);
        setRefreshReplies((prev) => !prev);
      } catch (error) {
        console.error("Error updating comment:", error);
      }
    }
  };

  const fetchReplies = async () => {
    try {
      const response = await fetch(`${API}/comments/replies/${props.commentId}`);
      if (!response.ok) throw new Error("Failed to fetch replies");
  
      const data = await response.json();
      console.log("Fetched Replies:", data); // Log response to see structure
      setReplies(data.replies || []); // Ensure replies is always an array
    } catch (error) {
      console.error("Error fetching replies:", error);
    }
  };
  
  const handleReplySubmit = (newReply) => {
    setReplies([...replies, newReply]); // Append new reply to state
    setIsReplying(false); // Hide reply form after submission
    setRefreshReplies((prev) => !prev); // Trigger refresh
  };

  const formatTimeAgo = (timestamp) => {
    const seconds = Math.floor((new Date() - new Date(timestamp)) / 1000);

    if (seconds < 60) return `1 minute ago`; // Default to 1 minute if < 60 seconds
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
    const weeks = Math.floor(days / 7);
    if (weeks < 4) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    const months = Math.floor(days / 30);
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;
    const years = Math.floor(days / 365);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  };

  // console.log(props.postId);

  return (
    <div className={`comment-container ${props.isReply ? "reply" : ""}`}>
      <div className="post-commenter-profile">
        <img
          id="commenter-image-container"
          src={props.profile_url}
          alt="profile picture"
        />
        <div style={{ flexGrow: 1, marginLeft: "10px" }}>
          <span id="post-user-hours">{props.userName_time}</span>
        </div>
        <CommentDropDown
          commentId={props.commentId}
          style={{ position: "static" }}
          userId={props.userId}
          onEdit={handleEdit}
        />
      </div>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            onKeyDown={handleKeyDown}
            className="mt-2 w-full border border-gray-300 rounded-md p-2 text-sm"
            placeholder={props.comment}
            autoFocus
            aria-label="Edit comment"
            id="edit-comment-input"
          />
        ) : (
          <span id="commenter-comment-container">{props.comment}</span>
        )}
      </div>
      <CommentActions
        upvotes={props.upvotes}
        downvotes={props.downvotes}
        commentId={props.commentId}
        postId={props.postId}
      />

      {/* Only show Reply Form when Comment-Comment button is clicked */}
      {isReplying && <ReplyForm parentCommentId={props.commentId} postId={props.postId} onReplySubmit={handleReplySubmit} />}

      {/* {isReplying && (
        <ReplyForm 
          parentCommentId={props.commentId} 
          postId={props.postId} 
          onReplySubmit={handleReplySubmit} 
        />
      )} */}

      {showReplies &&
        replies.map((reply) => (
          <Comments 
            key={reply._id}
            commentId={reply._id}
            comment={reply.content}
            profile_url={reply.user_id?.profile_url || "https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"}
            userName_time={`${reply.user_id?.user_name || "relle"} • ${formatTimeAgo(reply.createdAt)}`}
            isReply={true}
            replyCount={reply.replies_count}
            upvotes={reply.upvotes}
            downvotes={reply.downvotes}
            userId={reply.user_id}
            postId={reply.post_id}
            onUpdate={props.onUpdate} 
          />
        ))}

      {/* "View Replies" button should only be shown if replies exist */}
      {props.replyCount > 0 && (
        <button className="view-replies-btn" onClick={() => setShowReplies(!showReplies)}>
          {showReplies ? "Hide Replies" : `View Replies (${props.replyCount})`}
        </button>
      )}
    </div>
  );
}
