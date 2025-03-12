import "./Comments.css";
import CommentActions from "./CommentActions.jsx";
import CommentDropDown from "./CommentDropDown";

export default function Comments(props) {
  return (
    <>
      <div className="post-commenter-profile">
        <img
          id="commenter-image-container"
          src={props.profile_url}
          alt="profile picture"
        />
        <div style={{ flexGrow: 1, marginLeft: "10px" }}>
          <span id="post-user-hours">{props.userName_time}</span>
        </div>
        <CommentDropDown
          commentId={props.commentId}
          style={{ position: "static" }}
          userId={props.userId}
        />
      </div>
      <div>
        <span id="commenter-comment-container">
          {props.comment + " comment id: " + props.commentId}
        </span>
      </div>
      <CommentActions
        upvotes={props.upvotes}
        downvotes={props.downvotes}
        commentId={props.commentId}
      />
    </>
  );
}
