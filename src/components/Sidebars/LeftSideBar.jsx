import "./LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGlobe,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

export default function LeftSideBar() {
  return (
    <div className="left-sidebar">
      <button>
        <FontAwesomeIcon icon={faHouse} id="icon" /> Home
      </button>
      <button>
        <FontAwesomeIcon icon={faArrowUpRightDots} id="icon" /> Popular
      </button>
      <button>
        <FontAwesomeIcon icon={faClock} id="icon" /> Urgent
      </button>
      <button>
        <FontAwesomeIcon icon={faGlobe} id="icon" /> All
      </button>
    </div>
  );
}
