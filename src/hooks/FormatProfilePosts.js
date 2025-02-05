import { useState, useEffect } from "react";
import {
  calculateDeadlineProgress,
  formatDeadline,
  getRandomDeadline,
} from "../utils";

const profilePostData = [
  {
    id: 1,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "2 hours ago",
    title: "My Astrology Chart",
    deadline: getRandomDeadline(),
    tags: ["In Progress"],
    body: "This is my current progress on my astronomy map! please let me know how it is and what I need to change <3",
    images: [
      "https://i.pinimg.com/736x/2d/e6/d5/2de6d56a65b855d0c7caf064ba160920.jpg",
      "https://i.pinimg.com/736x/d4/af/fa/d4affaf621622faf7a9cf06a4ec20d57.jpg",
    ],
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
  {
    id: 2,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "1 day ago",
    title: "Building the Perfect Island",
    deadline: getRandomDeadline(),
    tags: ["Planning"],
    body: "Planning the layout for my dream island in Animal Crossing. Any suggestions for organizing villager homes?",
    images: [
      "https://i.pinimg.com/736x/89/cd/8b/89cd8b5e1d319f850e98333cc930e64a.jpg",
    ],
    actions: { upvotes: 25, downvotes: 3, comments: 12 },
  },
  {
    id: 3,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "5 hours ago",
    title: "Flower Breeding Tips",
    deadline: getRandomDeadline(),
    tags: ["Tips"],
    body: "Trying to get blue roses for my island. What are the best ways to breed them? Any help would be appreciated!",
    images: [
      "https://i.pinimg.com/736x/d2/c8/0b/d2c80bc998e1a5cdd55832ec376c1938.jpg",
      "https://i.pinimg.com/736x/ce/56/5e/ce565ee20e7f0677c98672bf42d95df1.jpg",
      "https://i.pinimg.com/736x/86/36/85/86368592e498d7215494042327c9e007.jpg",
      "https://i.pinimg.com/736x/c0/a2/55/c0a2552db282b8dd9a27be84b45d271f.jpg",
    ],
    actions: { upvotes: 43, downvotes: 1, comments: 8 },
  },
  {
    id: 4,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "3 days ago",
    title: "Museum Expansion Plans",
    deadline: getRandomDeadline(),
    tags: ["Ideas"],
    body: "Thinking of ways to improve my museum setup. Should I focus on fossils or fish exhibits first?",
    images: [
      "https://i.pinimg.com/736x/22/05/0c/22050cf90ca0d70c09944618dd0ff1fb.jpg",
      "https://i.pinimg.com/736x/ef/c1/03/efc103500211c2cfb7d521490f61c880.jpg",
    ],
    actions: { upvotes: 32, downvotes: 5, comments: 10 },
  },
  {
    id: 5,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "12 hours ago",
    title: "Creating Custom Songs",
    deadline: getRandomDeadline(),
    tags: ["Music"],
    body: "Started composing some custom songs for my villagers. Anyone interested in sharing theirs?",
    images: [],
    actions: { upvotes: 40, downvotes: 2, comments: 14 },
  },
  {
    id: 6,
    author: "hans_perez",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "8 hours ago",
    title: "Perfect Garden Setup",
    deadline: getRandomDeadline(),
    tags: ["Gardening"],
    body: "Trying to create a relaxing garden space. Any tips for integrating different flower types and furniture?",
    images: [
      "https://i.pinimg.com/736x/ad/6c/29/ad6c293c97f4e2a008e1f67566f20b4b.jpg",
      "https://i.pinimg.com/736x/43/14/92/43149289294262fa445b7f4f481326d5.jpg",
      "https://i.pinimg.com/736x/8a/d1/72/8ad172d5dfdeb2f89392d80905457f7d.jpg",
    ],
    actions: { upvotes: 50, downvotes: 0, comments: 20 },
  },
];

export default function FormatProfilePosts() {
  const [formattedPosts, setFormattedPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const formatData = () => {
      setIsLoading(true);

      try {
        const formatted = profilePostData.map((post) => ({
          id: post.id,
          author: post.author,
          profilePicture: post.profilePicture,
          timestamp: post.timestamp,
          title: post.title,
          deadline: {
            progress: calculateDeadlineProgress(post.deadline),
            formatted: formatDeadline(post.deadline),
          },
          tags: post.tags,
          body: post.body,
          images: post.images,
          actions: post.actions,
        }));

        setFormattedPost(formatted);
      } catch (err) {
        console.error("Error formatting post data:", err.message);
      } finally {
        setIsLoading(false);
      }
    };

    formatData();
  }, []);

  return { formattedPosts, isLoading };
}

/* import { useState, useEffect } from "react";
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
} */
