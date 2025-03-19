import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import ActionDropdownMenu from "./ActionDropdownMenu.jsx";
import { useState, useEffect } from "react";
import API from "../../url.js";
import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({ post, onDelete, handleVote }) {
  const timestamp = formatDistanceToNow(new Date(post.created_at));
  const [commentNum, setCommentNum] = useState(0);
  const [user, setUser] = useState();
  const user_id = post.created_by;
  const userTagWithAt = `@${String(user.user_tag)}`;
  
  const getUser = async function () {
    try {
      const response = await fetch(`${API}/user/${user_id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error getting user.");
      }

      const result = await response.json();

      setUser(result);
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
  }

  const getCommentNum = async function () {
    try {
      const response = await fetch(`${API}/comment-num/${post._id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error getting comments.");
      }

      const result = await response.json();

      setCommentNum(result);
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
  };

  useEffect(() => {
    getCommentNum();
    getUser();
  
    // Fetch data every 5 minutes (300,000 ms)
    const interval = setInterval(() => {
      getCommentNum();
      getUser();
    }, 300000);
  
    return () => clearInterval(interval);
  }, [post._id]);

  return (
    <div className="post">
      <div className="post-meta">
        {/* placeholder image */}
        <img
          src="https://i.pinimg.com/736x/e4/47/0b/e4470b9552dcbe56ec14483360595e7e.jpg"
          alt="Profile Picture"
        />
        <Link to={`/user/${user_id}`}>{userTagWithAt|| "@unknownuser"}</Link> • {timestamp}

        <div className="ml-auto">
          <ActionDropdownMenu
            key={post._id}
            id={post._id}
            onDelete={onDelete}
          />
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
        <button
          onClick={function () {
            handleVote(post._id, "up");
          }}
        >
          <i className="fa fa-arrow-up"></i> {post.upvotes}
        </button>
        <button
          onClick={function () {
            handleVote(post._id, "down");
          }}
        >
          <i className="fa fa-arrow-down"></i> {post.downvotes}
        </button>
        <Link key={post._id} to={`/view-project/${post._id}`}>
          <button>
            <i className="fa fa-comments"></i> {commentNum}
          </button>
        </Link>
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
    created_by: PropTypes.string.isRequired,
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
