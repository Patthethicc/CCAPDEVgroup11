import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ActionDropdownMenu from "./ActionDropdownMenu.jsx";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post, onDelete }) {
  const timestamp = formatDistanceToNow(new Date(post.created_at));
  return (
    <div className="post">
      <div className="post-meta">
        {/* placeholder image */}
        <img
          src="https://i.pinimg.com/736x/e4/47/0b/e4470b9552dcbe56ec14483360595e7e.jpg"
          alt="Profile Picture"
        />
        {/* placeholder author and timestamp */}
        <a href="#">Group 11</a> • {timestamp}
        <div className="ml-auto">
          <ActionDropdownMenu key={post._id} id={post._id} onDelete={onDelete}/>
        </div>
      </div>
      <div className="post-header">
        <div className="post-title">{post.title}</div>
        <div className="deadline-bar-container">
          <div
            className="deadline-text"
            dangerouslySetInnerHTML={{
              __html: `Progress: ${post.deadline.deadline_length}%`,
            }}
          />
          <div className="deadline-bar">
            <div
              className="progress"
              style={{ width: `${post.deadline.deadline_length}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="post-tags">
        <span
          data-status={post.deadline.progress}
          className={`progress-${post.deadline.progress}`}
        >
          {post.deadline.progress}
        </span>
      </div>
      <Link key={post._id} to={`/view-project/${post._id}`}>
        <div className="post-content ">
          <div className="post-body hover:text-[var(--darker-text-color)] transition-colors">
            {post.content}
          </div>
          {/*post.images?.length > 0 && ( */}
          <div className="post-images">
            {post.image && (
              <img className="main-image" src={post.image} alt="Post Image" />
            )}
            {/*post.images.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  className={`stacked-image-${index}`}
                  src={img}
                  alt="Stacked Image"
                />
              ))
            post.images.length > 3 && <div className="ellipsis">...</div>*/}
          </div>
        </div>
      </Link>
      <div className="post-actions">
        <button>
          <i className="fa fa-arrow-up"></i> {post.upvotes}
        </button>
        <button>
          <i className="fa fa-arrow-down"></i> {post.downvotes}
        </button>
        <button>
          <i className="fa fa-comments"></i> 0
        </button>
        <button>
          <i className="fa fa-share"></i>
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    comment_ids: PropTypes.array,
    deadline: PropTypes.shape({
      progress: PropTypes.string.isRequired,
      deadline_length: PropTypes.number.isRequired,
    }).isRequired,
    images: PropTypes.array,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
