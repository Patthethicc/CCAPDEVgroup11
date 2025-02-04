import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

export default function StsDropdownMenu({ value, onChange }) {
  return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="menu-button inline-flex bg-[var(--background-color)] min-w-[22%] w-auto
            text-sm shadow-md rounded-md font-semibold px-3 py-1 gap-x-2
            hover:bg-[var(--brighter-bg-color)] transition-colors"
        >
          {value || "Status"}
          <FontAwesomeIcon icon={faSortDown} aria-hidden="false" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[26%] bg-[var(--background-color)] rounded-md mt-2 transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out absolute z-50
          data-[leave]:duration-75 data-[leave]:ease-in shadow-md"
      >
        <MenuItem>
          <button
            onClick={() => onChange("Started")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
          >
            Started
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => onChange("In Progress")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            In Progress
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => onChange("Finished")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            Finished
          </button>
        </MenuItem>

        <MenuItem>
          <button
            onClick={() => onChange("Deployed")}
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
