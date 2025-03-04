import "./styles.css";

export default function ImageTitle() {
  return (
    <>
      <div className="post-title-deadline">
        <span id="title">My Astrology Chart</span>
        <span id="deadline">Deadline: Jan 24, 2025 at 15:00</span>
        <span id="triple-dot">⋯</span>
      </div>

      <div className="project-status">
        <p id="status">&nbsp;In Progress</p>
      </div>
    </>
  );
}
