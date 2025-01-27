import { useState, useEffect } from "react";
import formatPostData from "../services/formatter.js";
import { generatePost } from "../services/api.js";

export default function useFormatPost() {
  const [formattedPosts, setFormattedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const formatData = async function () {
      setIsLoading(true);

      try {
        const postData = await generatePost();

        if (postData && postData.length > 0) {
          const formatted = await Promise.all(
            postData.map((post) => formatPostData(post)),
          );
          setFormattedPost(formatted);
        }
      } catch (err) {
        console.error({ "Error getting post data:": err.message });
      } finally {
        setIsLoading(false);
      }
    };

    formatData();
  }, []);

  return { formattedPosts, isLoading };
}
