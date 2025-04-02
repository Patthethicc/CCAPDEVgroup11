import TitleField from "../components/CreateProject/TitleField.jsx";
import BodyField from "../components/CreateProject/BodyField.jsx";
import UploadFilesBtn from "../components/CreateProject/UploadFilesBtn.jsx";
import PostBtn from "../components/CreateProject/PostBtn.jsx";
import SliderProgress from "../components/CreateProject/SliderProgress.jsx";
import { useNavigate } from "react-router-dom";
import API from "../url.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

export default function EditProject() {
  const nav = useNavigate();
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("Status");
  const [file, setFile] = useState(null);
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
        setFile(projectData.image || null);
      } catch (error) {
        console.error("Error fetching project data: ", error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [postId]);

  const postData = async function () {
    let image_url = null;

    if (file) {
      const form_data = new FormData();
      form_data.append("image", file);

      try {
        const response = await fetch(`${API}/upload`, {
          method: "POST",
          body: form_data,
        });

        if (!response.ok) {
          throw new Error("Error uploading image");
        }

        const img = await response.json();
        image_url = img.image.url;
      } catch (err) {
        return console.error("Error uploading image: " + err.message);
      }
    }

    return image_url;
  };

  // Handle editing the post
  const handleEditPost = async () => {
    if (!postId || !title.trim() || !body.trim()) {
      alert("Title and body cannot be empty.");
      return;
    }

    let image_url;

    if (file && typeof file != "string") {
      image_url = await postData();
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
      image: image_url,
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

      nav("/home");
    } catch (err) {
      console.error("Error updating data: " + err.message);
    }
  };

  const adjustDeadLength = (progress) => {
    const progressMap = {
      Started: 0,
      "In Progress": 50,
      Finished: 100,
      Deployed: 100,
    };
    setDeadLength(progressMap[progress] || 0);
  };

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
      <UploadFilesBtn file={file} setFile={setFile} />
      <PostBtn handlePost={handleEditPost} value="Save" />
    </div>
  );
}
