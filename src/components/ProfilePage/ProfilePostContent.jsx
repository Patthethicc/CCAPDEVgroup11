import API from "../../url.js";
import { useState, useEffect, useCallback } from "react";
import PageBtn from "../Home/PageBtn.jsx";
import Post from "../Home/Post.jsx";

export default function ProfilePostContent({ userData }) {
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(1);
  const userId = userData.user_id;

  const getPostsByUser = useCallback(async function () {
    try {
      const response = await fetch(
        `${API}/user/${userId}/posts/?p=${current_page}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        throw new Error("Error getting all posts.");
      }

      const result = await response.json();
      console.log(result);
      setPosts(result.posts);
      setTotalPages(Number(result.total_pages));
    } catch (err) {
      console.error("Error getting data: " + err.message);
    }
  }, [userId, current_page]);

  useEffect(() => {
    getPostsByUser();
  }, [getPostsByUser]);

  const prevPage = () => setCurrentPage((page) => Math.max(page - 1, 0));
  const nextPage = () => setCurrentPage((page) => page + 1);

  const handleVote = async function (id, type) {
    try {
      const response = await fetch(`${API}/vote/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: type }),
      });

      if (!response.ok) {
        throw new Error("Error handling upvotes/downvotes.");
      }

      const result = await response.json();

      setPosts((prev_posts) =>
        prev_posts.map((post) => (post._id === id ? result : post))
      );
    } catch (err) {
      console.error("Error handling upvoting/downvoting: " + err.message);
    }
  };

  const handleDelete = (id) => {
    setPosts((prev_posts) => prev_posts.filter((post) => post._id !== id));
  };

  return (
    <div className="content">
      {posts.map((post) => (
        <Post
          key={post._id}
          post={post}
          onDelete={() => handleDelete(post._id)}
          handleVote={handleVote}
        />
      ))}
      <div className="flex items-center w-full">
        <div className="flex-1 justify-start">
          {current_page > 0 && (
            <PageBtn onClick={prevPage} className="py-[0.4em] px-[1.5em]">
              Previous Page
            </PageBtn>
          )}
        </div>

        <div className="flex justify-center">
          <span className="text-sm text-[var(--darker-text-color)]">
            Page {Number(current_page) + 1} of {total_pages}
          </span>
        </div>

        <div className="flex-1 flex justify-end">
          {current_page < total_pages - 1 && (
            <PageBtn onClick={nextPage} className="py-[0.4em] px-[1.5em]">
              Next Page
            </PageBtn>
          )}
        </div>
      </div>
    </div>
  );
}
