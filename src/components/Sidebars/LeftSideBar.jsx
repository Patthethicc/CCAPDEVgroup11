import "./LeftSideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScroll } from "@fortawesome/free-solid-svg-icons";


export default function LeftSideBar({category, setCategory}) {
  
  return (
    <>
      <div className="left-sidebar">
        <Link to="/home">
          <button>
            <i className="fa fa-home mx-[0.6em]" />
            Home
          </button>
        </Link>
        <button
        onClick={() => setCategory("Popular")}
        className={category === "Popular" ? "active" : ""}>
          <i className="fa fa-fire mx-[0.6em]" /> Popular
        </button>
        <button
        onClick={() => setCategory("Urgent")}
        className={category === "Urgent" ? "active" : ""}
        >
          <i className="fa fa-exclamation-triangle mx-[0.6em]" /> Urgent
        </button>
        <button
        onClick={() => setCategory("All")}
        className={category === "All" ? "active" : ""}>
          <FontAwesomeIcon icon={faScroll} className="mx-[0.7em]" />
          All
        </button>
      </div>
    </>
  );
}
