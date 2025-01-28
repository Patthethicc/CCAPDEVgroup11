import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

export default function StsDropdownMenu() {
  return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="menu-button inline-flex bg-[var(--background-color)] w-[18%] 
            text-sm shadow-md rounded-md font-semibold px-3 py-1 gap-x-2
            hover:bg-[var(--brighter-bg-color)] transition-colors"
        >
          Status
          <FontAwesomeIcon icon={faSortDown} aria-hidden="true" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[22%] bg-[var(--background-color)] rounded-md mt-2 transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out
          data-[leave]:duration-75 data-[leave]:ease-in shadow-md"
      >
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
          >
            Started
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            In Progress
          </button>
        </MenuItem>
        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            Finished
          </button>
        </MenuItem>

        <MenuItem>
          <button
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm mb-1"
          >
            Deployed
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
