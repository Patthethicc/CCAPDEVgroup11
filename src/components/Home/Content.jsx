import Post from "./Post.jsx";
import useFormatPost from "../../hooks/useFormatPost.js";
import "./Content.css";

export default function Content() {
  const { formattedPosts, isLoading } = useFormatPost();

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
