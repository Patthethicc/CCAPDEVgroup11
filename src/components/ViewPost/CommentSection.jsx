import "./CommentSection.css";
import Comments from "./Comments";
import { useState, useEffect } from "react";

export default function CommentSection({ projectId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      if (!projectId) return;

      try {
        const response = await fetch(
          `http://localhost:3000/comments/post/${projectId}`
        );
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

  return (
    <div className="post-comment-section">
      <Comments
        profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
        userName_time="isabelle_smiles •   8 hours ago"
        comment="Can't wait to see your finished product!"
      />

      {comments
        .filter((comment) => comment.user_id)
        .map((comment) => (
          <Comments
            key={comment._id}
            profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
            userName_time={`${comment.user_id.user_name} • ${new Date(
              comment.createdAt
            ).toLocaleString()}`}
            comment={comment.content}
            commentId={comment._id}
          />
        ))}
    </div>
  );
}
