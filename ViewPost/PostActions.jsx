import "./styles.css";

export default function PostAction() {
  return (
    <>
      <div className="post-actions-buttons">
        <button class="upvote-button">
          <i class="fa fa-arrow-up">&nbsp;2.5k</i>
        </button>
        <button class="downvote-button">
          <i class="fa fa-arrow-down"></i>
        </button>
        <button class="comment-button">
          <i class="fa fa-comments">&nbsp;24</i>
        </button>
        <button class="share-button">
          <i class="fa fa-share"></i>
        </button>
      </div>

      <div class="post-add-comment">Add a comment</div>
    </>
  );
}
