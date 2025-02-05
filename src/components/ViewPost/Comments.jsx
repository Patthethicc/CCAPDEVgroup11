import "./styles.css";

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
        <span id="commenter-comment-container">{props.comment}</span>
      </div>
      {/* commenter actions */}
      <div id="commenter-action-buttons" className="post-actions-buttons">
        <button className="comment-upvote-button" aria-label="Upvote">
          <i className="fa fa-arrow-up">&nbsp;5</i>
        </button>
        <button className="comment-downvote-button" aria-label="Downvote">
          <i className="fa fa-arrow-down"></i>
        </button>
        <button className="comment-comment-button" aria-label="Comment">
          <i className="fa fa-comments">&nbsp;0</i>
        </button>
        <button className="comment-share-button" aria-label="Share">
          <i className="fa fa-share"></i>
        </button>
      </div>
    </>
  );
}
