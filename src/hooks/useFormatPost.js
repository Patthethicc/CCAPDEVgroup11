import { useState, useEffect } from "react";
import formatPostData from "../services/formatter.js";

export default function useFormatPost(postData) {
  const [formattedPosts, setFormattedPost] = useState([]);

  useEffect(
    function () {
      const formatData = async function () {
        console.log(postData);
        if (postData && postData.length > 0) {
          const formatted = await Promise.all(
            postData.map((post) => formatPostData(post)),
          );
          setFormattedPost(formatted);
        }
      };

      if (postData && postData.length > 0) {
        formatData();
      }
    },
    [postData],
  );

  return formattedPosts;
}
