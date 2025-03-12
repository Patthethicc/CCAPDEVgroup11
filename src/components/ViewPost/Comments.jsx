import "./Comments.css";
import CommentActions from "./CommentActions.jsx";

export default function Comments(props) {
  return (
    <>
      <div className="post-commenter-profile">
        <img
          id="commenter-image-container"
          src={props.profile_url}
          alt="profile picture"
        />
        <span id="post-user-hours">{props.userName_time}</span>
      </div>
      <div>
        <span id="commenter-comment-container">
          {props.comment + "comment id: " + props.commentId}
        </span>
      </div>

      <CommentActions />
    </>
  );
}
