import "./PostActions.css";
import {
  faArrowUp,
  faArrowDown,
  faComments,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostAction() {
  const addParentComment = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="post-actions-buttons">
        <button className="post-upvote-button">
          <FontAwesomeIcon icon={faArrowUp} />
          &nbsp;2.5k
        </button>
        <button className="post-downvote-button">
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
        <button className="post-comment-button">
          <FontAwesomeIcon icon={faComments} />
          &nbsp;24
        </button>
        <button className="post-share-button">
          <FontAwesomeIcon icon={faShare} />
        </button>
      </div>
      <form>
        {/* onSubmit={handleAddComment} */}
        <input
          className="post-add-comment"
          type="text"
          placeholder="Add a comment..."
        />
      </form>

      {/* <div className="post-add-comment">Add a comment</div> */}
    </>
  );
}
