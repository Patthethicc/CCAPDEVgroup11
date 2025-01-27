import Post from "./Post.jsx";
import useFormatPost from "../../hooks/useFormatPost.js";
import "./Content.css";

export default function Content() {
  const { formattedPosts, isLoading } = useFormatPost();

  if (isLoading) {
    return <p className="content-center">Loading...</p>;
  }

  if (!formattedPosts) {
    return <p className="color-red">No post data fetched.</p>;
  }

  return (
    <div className="content">
      {formattedPosts.map(function (formattedPost, index) {
        console.log(formattedPost);
        return (
          <Post
            key={index}
            meta={formattedPost.meta}
            header={formattedPost.header}
            tags={formattedPost.tags}
            body={formattedPost.body}
            actions={formattedPost.actions}
          />
        );
      })}
    </div>
  );
}
