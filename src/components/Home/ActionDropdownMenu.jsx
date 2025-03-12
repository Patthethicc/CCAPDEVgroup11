import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import API from "../../url.js";
import {
  faEllipsis,
  faTrash,
  faEyeSlash,
  faPen,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function ActionDropdownMenu({ id, onDelete }) {
  const nav = useNavigate();

  const deletePost = async function name(id) {
    //kayo bahala kung gagawa ng custom confirmation of deletion
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete Post");
      }

      console.log("deleted sucessfully");
      onDelete();
      nav("/home");
    } catch (err) {
      console.error("Error deleting: " + err.message);
    }
  };

  return (
    <Menu as="div" className="relative" key={id}>
      <div>
        <MenuButton className="relative outline-none">
          <FontAwesomeIcon icon={faEllipsis} aria-hidden="false" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[22%] bg-[var(--brighter-bg-color)] rounded-md transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75
          data-[leave]:ease-in shadow-md absolute top-[22px] left-[-6.5rem] z-[30] min-w-[120px]" // Positioned under the button
      >
        <MenuItem>
          <Link to={`/edit-project/${id}`}>
            <button
              className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1"
            >
              <FontAwesomeIcon icon={faPen} className="ml-1 mr-2" /> Edit
            </button>
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1"
            onClick={() => deletePost(id)}
          >
            <FontAwesomeIcon icon={faTrash} className="ml-1 mr-2" /> Delete
          </button>
        </MenuItem>
        <div className="mx-2 my-1 bg-[var(--secondary-color)] h-px" />
        <MenuItem>
          <Link to="#">
            <button
              className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1"
            >
              <FontAwesomeIcon icon={faEyeSlash} className="ml-1 mr-2" /> Hide
            </button>
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left my-1"
          >
            <FontAwesomeIcon icon={faBookmark} className="ml-1 mr-2" /> Save
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

ActionDropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
