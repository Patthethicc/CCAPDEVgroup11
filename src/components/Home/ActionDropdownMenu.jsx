import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  faEllipsis,
  faPen,
  faBookmark,
  faEyeSlash,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionDropdownMenu() {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className=" relative top-[-9px] active:text-[var(--sub2-text-color)] outline-none">
          <FontAwesomeIcon icon={faEllipsis} aria-hidden="false" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[22%] bg-[var(--brighter-bg-color)] rounded-md transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out absolute right-[-5px] top-[20px] z-[30]
          data-[leave]:duration-75 data-[leave]:ease-in shadow-md min-w-[120px]"
      >
        <MenuItem>
          <Link to="/edit-project">
            <button
              className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
            >
              <FontAwesomeIcon icon={faPen} className="mr-2" />
              Edit
            </button>
          </Link>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
          >
            <FontAwesomeIcon icon={faEyeSlash} className="mr-2" />
            Hide
          </button>
        </MenuItem>
        <div className="my-1 mx-2 bg-[var(--sub2-text-color)] h-px" />
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
          >
            <FontAwesomeIcon icon={faBookmark} className="mr-2" />
            Save
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--primary-color)] transition-colors
               font-semibold text-sm text-left my-1 "
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
