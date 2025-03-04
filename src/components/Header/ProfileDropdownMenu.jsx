import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../../App.css";

export default function ProfileDropdownMenu({ value, onChange }) {
  return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="menu-button inline-flex
            text-sm  rounded-md font-semibold px-3 py-1 gap-x-2
             transition-colors"
        >
          <img
            src="https://i.pinimg.com/736x/63/d4/2b/63d42bcfc3ce97414d78f14ae76f61c8.jpg"
            alt="Profile Picture"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[120px] bg-[var(--secondary-color)] rounded-md mt-2 transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out absolute top-[50px] left-[-3.5rem]
          data-[leave]:duration-75 data-[leave]:ease-in shadow-md"
      >
        <MenuItem>
          <Link to="profile">
            <button
              onClick={() => onChange("Started")}
              className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
            >
              <FontAwesomeIcon icon={faUser} className="mx-2" />
              My Profile
            </button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/">
            <button
              onClick={() => onChange("In Progress")}
              className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm mb-1"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="mx-2" />
              Sign Out
            </button>
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
