import "./LeftSideBar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faCheck } from "@fortawesome/free-solid-svg-icons";


export default function LeftSideBar({category, setCategory}) {
  
  return (
    <>
      <div className="left-sidebar">
        <Link to="/home">
          <button
          onClick={() => setCategory("Home")}
          className={category === "Home" ? "active" : ""}>
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
        onClick={() => setCategory("InProgress")}
        className={category === "In Progress" ? "active" : ""}
        >
          <FontAwesomeIcon icon={faBarsProgress} className="mx-[0.7em]"/> In Progress
        </button>
        <button
        onClick={() => setCategory("Finished")}
        className={category === "Finished" ? "active" : ""}>
          <FontAwesomeIcon icon={faCheck} className="mx-[0.7em]" />
          Finished
        </button>
      </div>
    </>
  );
}
