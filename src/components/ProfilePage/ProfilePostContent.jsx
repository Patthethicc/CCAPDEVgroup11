import Post from "../Home/Post.jsx";
import "./ProfilePostContent.css";
import FormatProfilePosts from "../../hooks/formatProfilePosts.js";
export default function ProfilePostContent() {
  const { formattedPosts, isLoading } = FormatProfilePosts();

  if (isLoading) {
    return <p className="loading-message">Loading...</p>;
  }

  if (!formattedPosts || formattedPosts.length === 0) {
    return <p className="error-message">No post data available.</p>;
  }

  return (
    <div className="content">
      {formattedPosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
