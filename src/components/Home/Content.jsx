import Post from "./Post.jsx";
import "./Content.css";
import API from "../../url.js";
import { useState, useEffect, useCallback } from "react";
import PageBtn from "./PageBtn.jsx";

export default function Content({category}) {
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(1);


  const getPosts = useCallback(
    async function () {
      let url = `${API}/?p=${current_page}`
      
      if (category === "Popular") {
        url += "&sort=popular";
      }
      if (category === "InProgress") {
        url += "&sort=inProgress";
      }
      if (category === "Finished") {
        url += "&sort=finished";
      }


      try {
        const response = await fetch(url, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Error getting all posts.");
        }

        const result = await response.json();
        console.log(result);
        setPosts(result.posts);
        setTotalPages(Number(result.total_pages));
        setCurrentPage(Number(result.current_page));
      } catch (err) {
        console.error("Error getting data: " + err.message);
      }
    },
    [current_page, category]
  );

  useEffect(
    function () {
      getPosts();
    },
    [getPosts]
  );

  const prevPage = function (page) {
    return page - 1;
  };

  const nextPage = function (page) {
    return page + 1;
  };

  const handleVote = async function (id, user_id, type) {
    try {
      const response = await fetch(`${API}/vote/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user_id, type: type }),
      });

      if (!response.ok) {
        throw new Error("Error handling upvotes/downvotes.");
      }

      const result = await response.json();

      setPosts((prev_posts) =>
        prev_posts.map((post) => (post._id == id ? result : post))
      );
    } catch (err) {
      console.error("Error handling upvoting/downvoting: " + err.message);
    }
  };

  return (
    <div className="content">
      {posts.map((post, index) => (
        <Post
          key={post.id || index}
          post={post}
          onDelete={getPosts}
          handleVote={handleVote}
        />
      ))}
      <div className="flex items-center w-full">
        <div className="flex-1 justify-start">
          {current_page > 0 && (
            <PageBtn
              onClick={function () {
                setCurrentPage(prevPage(current_page));
              }}
              className="py-[0.4em] px-[1.5em]"
            >
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
            <PageBtn
              onClick={function () {
                setCurrentPage(nextPage(current_page));
              }}
              className="py-[0.4em] px-[1.5em]"
            >
              Next Page
            </PageBtn>
          )}
        </div>
      </div>
    </div>
  );
}
