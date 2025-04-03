import "./ReplyForm.css"
import { useState } from "react";
import API from "../../url.js";

export default function ReplyForm({ parentCommentId, postId}) {
  const [replyContent, setReplyContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.userId;
  
  // console.log("Raw localStorage user:", localStorage.getItem("user"));
  // console.log("ReplyForm Props:", { parentCommentId, userId });

  const handleReply = async () => {
    if (!replyContent.trim()) return;
    console.log(userId);

    if (!userId) {
      console.error("User is not logged in.");
      return;
    }

    try {
      console.log("Reply Data:", { postId, parentCommentId, userId, replyContent });

      const response = await fetch(`${API}/comments/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
          post_id: postId,
          parent_comment_id: parentCommentId,
          content: replyContent,
        }),
      });

      if (!response.ok) throw new Error("Failed to add reply");

      setReplyContent("");
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  return (
    <div className="reply-form">
      <input
        type="text"
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        className="reply-input"
        placeholder="Write a reply..."
      />
      <button className="send-reply-btn" onClick={handleReply}>
        Reply
      </button>
    </div>
  );
}
