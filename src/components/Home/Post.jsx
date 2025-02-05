import PropTypes from "prop-types";
import ActionDropdownMenu from "./ActionDropdownMenu.jsx";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post }) {
  const progress = post.deadline.progress;
  const formattedDeadline = post.deadline.formatted;
  console.log("post");
  return (
    <Link to ="/view-post">
      <div className="post">
        <div className="post-meta">
          <img src={post.profilePicture} alt="Profile Picture" />
          <a href="#">{post.author}</a> • {post.timestamp}
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
        <div className="post-content">
          <div className="post-body">{post.body}</div>
          {post.images.length > 0 && (
            <div className="post-images">
              <img className="main-image" src={post.images[0]} alt="Post Image" />
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
    </Link>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deadline: PropTypes.shape({
      progress: PropTypes.number.isRequired,
      formatted: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    body: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    actions: PropTypes.shape({
      upvotes: PropTypes.number.isRequired,
      downvotes: PropTypes.number.isRequired,
      comments: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

/* import PropTypes from "prop-types";
import "./Post.css";

export default function Post({ meta, header, tags, body, actions }) {
  return (
    <div className="post">
      <div className="post-meta">
        <img src={meta.imgSrc} alt="pfp" />
        <a href="#">{meta.username}</a> • {meta.time}
      </div>
      <div className="post-header">
        <div className="post-title">{header.title}</div>
        <div className="deadline-bar-container">
          <div
            className="progress w-12"
            style={{ width: `${header.deadline}%` }}
          ></div>
        </div>
      </div>
      <div className="post-tags">
        <span className={tags.className}>{tags.text}</span>
      </div>
      <div className="post-body">{body}</div>
      <div className="post-actions">
        {actions.map((action, index) => (
          <button key={index}>
            {<i className={action.icon}></i>}
            {action.label}
          </button>
        ))}
        <button>
          <i className="fa fa-share m-1"></i>
        </button>
      </div>
    </div>
  );
}

Post.propTypes = {
  meta: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  header: PropTypes.shape({
    title: PropTypes.string.isRequired,
    deadline: PropTypes.number.isRequired,
  }).isRequired,
  tags: PropTypes.shape({
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }).isRequired,
  body: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
}; */
