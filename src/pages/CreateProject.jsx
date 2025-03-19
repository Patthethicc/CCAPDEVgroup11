import TitleField from "../components/CreateProject/TitleField.jsx";
import BodyField from "../components/CreateProject/BodyField.jsx";
import UploadFilesBtn from "../components/CreateProject/UploadFilesBtn.jsx";
import PostBtn from "../components/CreateProject/PostBtn.jsx";
import SliderProgress from "../components/CreateProject/SliderProgress.jsx";
import API from "../url.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../App.css";

export default function CreateProject() {
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("Status");
  const [deadlength, setDeadLength] = useState(0);
  const [file, setFile] = useState(null);
  const [post, setPost] = useState(false);

  useEffect(
    function () {
      if (!post) return;

      const postData = async function () {
        const user_id = JSON.parse(localStorage.getItem("user"));

        if (!title.trim() || !body.trim()) {
          alert("Title and body cannot be empty.");
        }
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

        console.log(user_id);

        const data = {
          user_id,
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
          const response = await fetch(`${API}/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Error making post.");
          }

          const result = await response.json();
          console.log(result);

          // resets the fields
          setTitle("");
          setBody("");
          setProgress("Status");
          setDeadLength(0);
          setFile(null);

          nav("/home");
        } catch (err) {
          console.error("Error posting data: " + err.message);
        } finally {
          setPost(false);
        }
      };

      postData();
    },
    [title, body, progress, deadlength, file, post, nav],
  );

  useEffect(
    function () {
      adjustDeadLength(progress);
    },
    [progress],
  );

  const handlePost = function () {
    setPost(true);
  };

  const adjustDeadLength = function (progress) {
    const map = {
      Started: 0,
      "In Progress": 50,
      Finished: 100,
      Deployed: 100,
    };

    setDeadLength(map[progress] || 0);
  };

  return (
    <div
      className="create-project flex px-8 py-6 flex-col 
      mx-[55px] max-w-[550px] w-full 
      bg-[var(--primary-color)] box-border rounded-lg gap-4 shadow-md"
    >
      <h1 className="font-bold text-xl">Create Project</h1>
      <TitleField title={title} setTitle={setTitle} />
      <SliderProgress
        progress={progress}
        setProgress={setProgress}
        deadlength={deadlength}
        setDeadLength={setDeadLength}
      />
      <BodyField body={body} setBody={setBody} />
      <UploadFilesBtn file={file} setFile={setFile} />
      <PostBtn handlePost={handlePost} value="Post" />
    </div>
  );
}
