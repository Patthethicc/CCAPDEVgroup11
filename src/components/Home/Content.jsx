import Post from "./Post.jsx";
import "./Content.css";
import API from "../../url.js";
import { useState, useEffect } from "react";
import PageBtn from "./PageBtn.jsx";

export default function Content() {
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(0);
  const [total_pages, setTotalPages] = useState(1);

  useEffect(
    function () {
      const getPosts = async function () {
        try {
          const response = await fetch(`${API}/?p=${current_page}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });

          if (!response.ok) {
            throw new Error("Error getting all posts.");
          }

          const result = await response.json();
          console.log(result);
          setPosts(result.posts);
          setTotalPages(result.total_pages);
          setCurrentPage(result.current_page);
        } catch (err) {
          console.error("Error getting data: " + err.message);
        }
      };
      getPosts();
    },
    [current_page],
  );

  const prevPage = function (page) {
    return page - 1;
  };

  const nextPage = function (page) {
    return page + 1;
  };

  return (
    <div className="content">
      {posts.map((post, index) => (
        <Post key={post.id || index} post={post} />
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
