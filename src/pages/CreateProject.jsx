import TitleField from "../components/CreateProject/TitleField.jsx";
import BodyField from "../components/CreateProject/BodyField.jsx";
import UploadFilesBtn from "../components/CreateProject/UploadFilesBtn.jsx";
import PostBtn from "../components/CreateProject/PostBtn.jsx";
import SliderProgress from "../components/CreateProject/SliderProgress.jsx";
import { useState, useEffect } from "react";
import "../App.css";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("");
  const [deadlength, setDeadLength] = useState(0);
  const [post, setPost] = useState(false);

  useEffect(function () {
    if (!post) return;

    const post_data = async function () {
      const data = {
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
    };
  });

  return (
    <div
      className="create-project flex px-8 py-6 flex-col 
      mx-[55px] max-w-[550px] w-full 
      bg-[var(--primary-color)] box-border rounded-lg gap-4 shadow-md"
    >
      <h1 className="font-bold text-xl">Create Project</h1>
      <TitleField />
      <SliderProgress />
      <BodyField />
      <UploadFilesBtn />
      <PostBtn />
    </div>
  );
}
