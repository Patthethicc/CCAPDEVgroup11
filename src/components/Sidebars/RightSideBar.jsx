import "./RightSideBar.css";
import NewProjetBtn from "./NewProjectBtn.jsx";

export default function RightSideBar() {
  return (
    <>
      <div className="flex max-w-100 flex-col items-center px-1 gap-y-5">
        <NewProjetBtn />
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
      </div>
    </>
  );
}
