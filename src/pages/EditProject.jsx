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
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [progress, setProgress] = useState("Status");
  const [deadlength, setDeadLength] = useState(0);
  const [post, setPost] = useState(false);
  console.log("Here is id: ", id);

  useEffect ( function () {
    if (!id) {
      console.error("No ID found in URL");
      return;
    }
    const fetchData = async function () {
      try {
        const response = await fetch(`${API}/${id}`, {
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
      }
    };

    fetchData();
  }, [id],);

  useEffect(
    function () {
      const editData = async function () {
        if (!post) return;

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

        try {
          const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Error editing post.");
          }

          const result = await response.json();
          console.log(result);

        } catch (err) {
          console.error("Error editing data: " + err.message);
        } finally {
          setPost(false);
        }
      };

      editData();
    },
    [id, title, body, progress, deadlength, post],
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
            <EditBtn handlePost={handlePost} />
    </div>
  );
}
