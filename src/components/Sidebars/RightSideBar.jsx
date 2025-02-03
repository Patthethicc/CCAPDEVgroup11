import "./RightSideBar.css";
import NewProjetBtn from "./NewProjectBtn.jsx";

export default function RightSideBar() {
  return (
    <>
      <div className="flex max-w-100 flex-col items-center px-1 gap-y-5">
        <NewProjetBtn />
        <div className="right-sidebar">
          <button>
            <i className="fa fa-folder-open mx-[0.6em]" />
            My Projects
          </button>
          <button>
            <i className="fa fa-book mx-[0.6em]" />
            Study Rooms
          </button>
          <button>
            <i className="fa fa-trophy mx-[0.6em]" />
            Challenges
          </button>
        </div>
      </div>
    </>
  );
}
