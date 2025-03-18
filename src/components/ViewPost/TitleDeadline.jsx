import "./TitleDeadline.css";
import ActionDropdownMenu from "../Home/ActionDropdownMenu.jsx";

export default function TitleDeadline({
  title,
  progress,
  deadlength,
  id,
  onDelete,
}) {
  return (
    <>
      <div className="post-title-deadline">
        <span id="title">{title}</span>
        <div className="deadline-bar-container ">
          <div
            className="deadline-text bg-[var(--background-color)] h-full items-center align-center flex px-5 rounded-md"
            style={{ width: `${deadlength}%` }}
          >
            <p className="w-full text-center">{`Progress: ${deadlength}%`}</p>
          </div>
          <div className="deadline-bar">
            <div className="progress" style={{ width: `${deadlength}` }}></div>
          </div>
        </div>
        <span>
          <div className="ml-8">
            <ActionDropdownMenu key={id} id={id} onDelete={onDelete} />
          </div>
        </span>
      </div>

      <div className="post-tags mb-5">
        <span data-status={progress} className={`progress-${progress}`}>
          {progress}
        </span>
      </div>
    </>
  );
}
