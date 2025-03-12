import "./CommentSection.css";
import Comments from "./Comments";
import { useState, useEffect } from "react";

export default function CommentSection({ projectId }) {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      if (!projectId) return; // Ensure projectId exists before fetching
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

/*

        <Comments
          profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
          userName_time="isabelle_smiles •   8 hours ago"
          comment="Can't wait to see your finished product!"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
          userName_time="isabelle_smiles2 •   7 hours ago"
          comment="Can't wait to see your finished product! (2)"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/dc/9f/f6/dc9ff6bfce06bd402d16edb127cfbc6f.jpg"
          userName_time="tom_n00k  •   6 hours ago"
          comment="Work of art!"
        />

        <Comments
          profile_url="https://i.pinimg.com/736x/dc/9f/f6/dc9ff6bfce06bd402d16edb127cfbc6f.jpg"
          userName_time="tom_n00k  •   5 hours ago"
          comment="Always rooting for you works!"
        />
*/
