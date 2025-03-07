import Post from "./Post.jsx";
import "./Content.css";
import API from "../../url.js";
import { useState, useEffect } from "react";
import PageBtn from "./PageBtn.jsx";

export default function Content() {
  const [posts, setPosts] = useState([]);
  const [current_page, setCurrentPage] = useState(1);
  const [total_pages, setTotalPages] = useState(1);

  useEffect(function () {
    const getPosts = async function () {
      try {
        const response = await fetch(`${API}/`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Error getting all posts.");
        }

        const result = await response.json();
        console.log(result);
        setPosts(result);
        setTotalPages(result.total_pages);
      } catch (err) {
        console.error("Error getting data: " + err.message);
      }
    };

    getPosts();
  }, []);

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
      <div className="flex justify-between items-center">
        {current_page > 1 && (
          <PageBtn
            onClick={function () {
              setCurrentPage(prevPage);
            }}
            className="py-[0.4em]"
          >
            Previous Page
          </PageBtn>
        )}
        <span className="text-sm text-[var(--darker-text-color)]">
          Page {current_page} of {total_pages}
        </span>
        <PageBtn
          onClick={function () {
            setCurrentPage(nextPage);
          }}
          className="py-[0.4em]"
        >
          Next Page
        </PageBtn>
      </div>
    </div>
  );
}
