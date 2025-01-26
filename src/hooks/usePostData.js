import { useState, useEffect } from "react";
import { generatePost } from "../services/api.js";

export default function usePostData() {
  const [postData, setPostData] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function () {
    const fetchPost = async function () {
      setIsLoading(true);
      try {
        const rawPost = await generatePost();
        setPostData(rawPost);
        console.log("Raw post:", rawPost);
      } catch (err) {
        console.error({ "Error getting post data: ": err.message });
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  return { postData, isLoading };
}
