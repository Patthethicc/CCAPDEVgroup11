import "./styles.css";
import {
  faArrowUp,
  faArrowDown,
  faComments,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostAction() {
  return (
    <>
      <div className="post-actions-buttons">
        <button className="upvote-button">
          <FontAwesomeIcon icon={faArrowUp} />
          &nbsp;2.5k
        </button>
        <button className="downvote-button">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className="comment-button">
          <FontAwesomeIcon icon={faComments} />
          &nbsp;24
        </button>
        <button className="share-button">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>

      <div className="post-add-comment">Add a comment</div>
    </>
  );
}
