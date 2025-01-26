import PropTypes from "prop-types";
import "./Post.css";

export default function Post({ meta, header, tags, body, actions }) {
  if (!meta || !header || !tags || !body || !actions) {
    return <p>Invalid post data</p>;
  }

  return (
    <div className="post">
      <div className="post-meta">
        <img src={meta.imgSrc} alt="pfp" />
        <a href="#">{meta.username}</a> • {meta.time}
      </div>
      <div className="post-header">
        <div className="post-title">{header.title}</div>
        <div className="deadline-bar">
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
          <button key={index}>{action}</button>
        ))}
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
  actions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
