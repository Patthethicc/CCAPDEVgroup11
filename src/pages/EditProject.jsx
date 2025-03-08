import TitleField from "../components/EditProject/TitleField.jsx";
import BodyField from "../components/EditProject/BodyField.jsx";
import UploadFilesBtn from "../components/EditProject/UploadFilesBtn.jsx";
import EditBtn from "../components/EditProject/EditBtn.jsx";
import SliderProgress from "../components/EditProject/SliderProgress.jsx";
import API from "../url.js";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../App.css";

export default function EditProject() {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("Status");
  const [deadlength, setDeadLength] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch project data on component mount
  useEffect(() => {
    if (!postId) {
      console.error("No ID found in URL");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${API}/${postId}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch project data.");
        }

        const projectData = await response.json();
        setTitle(projectData.title);
        setBody(projectData.content);
        setProgress(projectData.deadline.progress);
        setDeadLength(projectData.deadline.deadline_length);
      } catch (error) {
        console.error("Error fetching project data: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  // Handle editing the post
  const handleEditPost = async () => {
    if (!postId || !title.trim() || !body.trim()) {
      alert("Title and body cannot be empty.");
      return;
    }

    const updatedPost = {
      title,
      content: body,
      deadline: {
        progress,
        deadline_length: deadlength,
      },
      created_at: Date.now(),
      upvotes: 0,
      downvotes: 0,
      comment_ids: [],
    };

    try {
      const response = await fetch(`${API}/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPost),
      });

      if (!response.ok) {
        throw new Error("Error updating post.");
      }

      const result = await response.json();
      console.log("Post updated successfully:", result);
    } catch (err) {
      console.error("Error updating data: " + err.message);
    }
  };

  // Adjust deadline length based on progress
  const adjustDeadLength = (progress) => {
    const progressMap = {
      Started: 0,
      "In Progress": 50,
      Finished: 100,
      Deployed: 100,
    };
    setDeadLength(progressMap[progress] || 0);
  };

  // Update deadlength when progress changes
  useEffect(() => {
    adjustDeadLength(progress);
  }, [progress]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="create-project flex px-8 py-6 flex-col mx-[55px] max-w-[550px] w-full bg-[var(--primary-color)] box-border rounded-lg gap-4 shadow-md">
      <h1 className="font-bold text-xl">Edit Project</h1>
      <TitleField title={title} setTitle={setTitle} />
      <SliderProgress
        progress={progress}
        setProgress={setProgress}
        deadlength={deadlength}
        setDeadLength={setDeadLength}
      />
      <BodyField body={body} setBody={setBody} />
      <UploadFilesBtn />
      <EditBtn handlePost={handleEditPost} />
    </div>
  );
}