import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

export default function StsDropdownMenu({ progress, setProgress }) {
  return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="menu-button inline-flex bg-[var(--background-color)] min-w-[6.9em] w-full           text-sm shadow-md rounded-md font-semibold px-3 py-1 gap-x-2
            hover:bg-[var(--brighter-bg-color)] transition-colors"
        >
          {progress || "Status"}
          <FontAwesomeIcon
            className="ml-1.5"
            icon={faSortDown}
            aria-hidden="false"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-full bg-[var(--brighter-bg-color)] rounded-md  mt-2 transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out absolute z-50
          data-[leave]:duration-75 data-[leave]:ease-in shadow-xl py-1"
      >
        {["Started", "In Progress", "Finished", "Deployed"].map((status) => (
          <MenuItem key={status}>
            <button
              onClick={() => setProgress(status)}
              className="px-2 py-1 w-full hover:bg-[var(--background-color)] transition-colors
               font-semibold text-sm text-left"
            >
              {status}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
