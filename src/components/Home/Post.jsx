import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ActionDropdownMenu from "./ActionDropdownMenu.jsx";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post }) {
  const progress = post.deadline.progress;
  const formattedDeadline = post.deadline.formatted;

  const timestamp = formatDistanceToNow(post.created_at);

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
          <ActionDropdownMenu />
        </div>
      </div>
      <div className="post-header">
        <div className="post-title">{post.title}</div>
        <div className="deadline-bar-container">
          <div
            className="deadline-text"
            dangerouslySetInnerHTML={{ __html: formattedDeadline }}
          />
          <div className="deadline-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className="post-tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="in-progress-tag">
            {tag}
          </span>
        ))}
      </div>
      <Link to="/view-project">
        <div className="post-content ">
          <div className="post-body hover:text-[var(--darker-text-color)] transition-colors">
            {post.body}
          </div>
          {post.images.length > 0 && (
            <div className="post-images">
              <img
                className="main-image"
                src={post.images[0]}
                alt="Post Image"
              />
              {post.images.slice(1, 3).map((img, index) => (
                <img
                  key={index}
                  className={`stacked-image-${index}`}
                  src={img}
                  alt="Stacked Image"
                />
              ))}
              {post.images.length > 3 && <div className="ellipsis">...</div>}
            </div>
          )}
        </div>
      </Link>
      <div className="post-actions">
        <button>
          <i className="fa fa-arrow-up"></i> {post.actions.upvotes}
        </button>
        <button>
          <i className="fa fa-arrow-down"></i> {post.actions.downvotes}
        </button>
        <button>
          <i className="fa fa-comments"></i> {post.actions.comments}
        </button>
        <button>
          <i className="fa fa-share"></i>
        </button>
      </div>
    </div>
  );
}
