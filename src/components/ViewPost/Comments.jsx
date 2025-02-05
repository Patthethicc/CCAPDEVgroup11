import "./styles.css";
import {
  faArrowUp,
  faArrowDown,
  faComments,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <button
          className="comment-upvote-button font-garet-book"
          aria-label="Upvote"
        >
          <FontAwesomeIcon icon={faArrowUp} /> 5
        </button>
        <button className="comment-downvote-button" aria-label="Downvote">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className="comment-comment-button" aria-label="Comment">
          <FontAwesomeIcon icon={faComments} />
          &nbsp;0
        </button>
        <button className="comment-share-button" aria-label="Share">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
    </>
  );
}
