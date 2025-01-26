import Post from "./Post.jsx";
import usePostData from "../../hooks/usePostData.js";
import useFormatPost from "../../hooks/useFormatPost.js";
import "./Content.css";

export default function Content() {
  const { postData, isLoading } = usePostData();

  const formattedPosts = useFormatPost(postData);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(formattedPosts);
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
