import "./RightSideBar.css";

export default function RightSideBar() {
  return (
    <div className="right-sidebar">
      <button>
        <span>📂</span> My Projects
      </button>
      <button>
        <span>📚</span> Study Rooms
      </button>
      <button>
        <span>🏆</span> Challenges
      </button>
    </div>
  );
}
