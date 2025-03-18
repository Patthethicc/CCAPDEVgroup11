import "./TitleDeadline.css";
import  ActionDropdownMenu from "../Home/ActionDropdownMenu.jsx"

export default function TitleDeadline({ title, progress, deadlength, id, onDelete }) {
  return (
    <>
      <div className="post-title-deadline">
        <span id="title">{title}</span>
          <div className="deadline-bar-container">
            <div
              className="deadline-text"
              dangerouslySetInnerHTML={{
                __html: `Progress: ${deadlength}%`,
              }}
            />
            <div className="deadline-bar">
              <div
                className="progress"
                style={{ width: `${deadlength}` }}
              ></div>
            </div>
          </div>
        <span>
          <div className="ml-auto">
            <ActionDropdownMenu key={id} id={id} onDelete={onDelete}/>
          </div>
        </span>
      </div>

      <div className="post-tags">
        <span
          data-status={progress}
          className={`progress-${progress}`}
        >
          {progress}
        </span>
      </div>
    </>
  );
}