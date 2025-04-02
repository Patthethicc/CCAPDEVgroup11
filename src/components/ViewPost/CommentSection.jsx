import "./CommentSection.css";
import Comments from "./Comments";
import { useState, useEffect } from "react";
import API from "../../url.js";

export default function CommentSection({ projectId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!projectId) return;

      try {
        const response = await fetch(`${API}/comments/post/${projectId}`);
        if (!response.ok) throw new Error("Failed to fetch comments");
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
    // refresh comment section
    const interval = setInterval(() => {
      fetchComments();
    }, 3000);

    return () => clearInterval(interval);
  }, [projectId]);

  const handleCommentUpdate = (commentId, newContent) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? { ...comment, content: newContent }
          : comment
      )
    );
  };

  const handleDeleteReply = (parentCommentId) => {
    setUpdatedComments((prevComments) => 
      prevComments.map((comment) => {
        if (comment._id === parentCommentId) {
          return {
            ...comment,
            replyCount: comment.replyCount ? comment.replyCount - 1 : 0,
          };
        }
        return comment;
      })
    );
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

  return (
    <div className="post-comment-section">
      {comments
        .filter((comment) => comment.user_id)
        .map((comment) => (
          <Comments
            key={comment._id}
            profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
            userName_time={`${
              comment.user_id?.user_name || "Unknown User"
            } • ${formatTimeAgo(new Date(comment.createdAt))}`} // ${formatTimeAgo(new Date(comment.createdAt))}
            comment={comment.content}
            isReply={false} // Parent comments
            replyCount={comment.replies_count}
            onDeleteReply={handleDeleteReply} // Pass the delete function down
            upvotes={comment.upvotes}
            downvotes={comment.downvotes}
            commentId={comment._id}
            userId={comment.user_id}
            postId={comment.post_id}
            onUpdate={handleCommentUpdate}
          />
        ))}
    </div>
  );
}
