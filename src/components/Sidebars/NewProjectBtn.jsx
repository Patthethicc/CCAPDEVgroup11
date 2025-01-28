import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import "../../App.css";

export default function NewProjetBtn() {
  return (
    <Link to="/create-project">
      <button
        className="text-[var(--sub-text-color)] text-md bg-[var(--primary-color)] font-bold space-x-5 flex rounded-md w-80 py-2 items-center 
            hover:bg-[var(--secondary-color)] transition-colors sticky"
      >
        <FontAwesomeIcon
          className="ml-4 text-left text-xl"
          icon={faSquarePlus}
        />
        <p>New Project</p>
      </button>
    </Link>
  );
}
