import "./RepliesSection.css";
import ReplyForm from "./ReplyForm.jsx";
import CommentActions from "./CommentActions.jsx";
import { useState } from "react";

export default function RepliesSection({ parentId, comments }) {
  const [replyingTo, setReplyingTo] = useState(null);

  // Filter replies that belong to this parent comment
  const replies = comments.filter((comment) => comment.parent_comment_id === parentId);

  if (replies.length === 0) return null; // No replies → return nothing

  return (
    <div className="replies-section">
      <div className="reply-container">
        {replies.map((reply, index) => {
          // Dynamically increase the indentation for deeper nested replies
          const indentation = `${index + 1}em`; // Increase this for deeper nesting

          return (
            <div key={reply._id} className="reply" style={{ paddingLeft: indentation }}>
              <div className="reply-content">
                <p className="reply-author">{reply.author}</p>
                <p className="reply-text">{reply.content}</p>
                <CommentActions commentId={reply._id} upvotes={reply.upvotes} downvotes={reply.downvotes} />
              </div>

              {/* Reply button */}
              <button className="reply-button" onClick={() => setReplyingTo(reply._id)}>
                Reply
              </button>

              {/* Show ReplyForm when replying */}
              {replyingTo === reply._id && (
                <ReplyForm parentCommentId={reply._id} postId={reply.post_id} />
              )}

              {/* Recursive Replies Section */}
              <RepliesSection parentId={reply._id} comments={comments} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
