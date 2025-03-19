import Comments from "../ViewPost/Comments";
import "./ProfileComments.css";
import { useState, useEffect } from "react";
import API from "../../url.js";

export default function ProfileComments({ userData }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = userData.user_id;

  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Construct the API URL with the userId
        const url = `${API}/user/${userId}/comments`;
        console.log("Fetching comments from:", url);

        const response = await fetch(url);

        // Check if the response is not ok
        if (!response.ok) {
          throw (`No Comments Found`);
        }

        const data = await response.json();
        console.log("Fetched comments:", data);
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [userId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="profile-comments">
      {comments
        .filter((comment) => comment.user_id)
        .map((comment) => (
          <Comments
            key={comment._id}
            profile_url="https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg"
            userName_time={`${
              userData?.user_name || "Unknown User"
            } • ${new Date(comment.createdAt).toLocaleString()}`}
            comment={comment.content}
            upvotes={comment.upvotes}
            downvotes={comment.downvotes}
            commentId={comment._id}
            userId={comment.user_id}
          />
        ))}
    </div>
  );
}
