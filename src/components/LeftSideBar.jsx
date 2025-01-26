import "./LeftSideBar.css";

export default function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <button>
        <span>🏠</span> Home
      </button>
      <button>
        <span>🔥</span> Popular
      </button>
      <button>
        <span>⚠️</span> Urgent
      </button>
      <button>
        <span>📜</span> All
      </button>
    </div>
  );
}
