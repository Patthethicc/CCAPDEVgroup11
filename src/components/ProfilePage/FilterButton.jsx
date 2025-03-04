import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

export default function FilterButton({ value, onChange }) {
	return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="bg-[color:var(--secondary-color)] h-10 w-[97.5%] text-left mr-4 m-2.5 p-[5px] rounded-[20px] border-[#515d59] border-[3px] 
		 hover:bg-[color:var(--primary-color)] hover:border-[color:var(--secondary-color)] hover:rounded-[20px] hover:border-[3px];"
        >
		<FontAwesomeIcon icon={faFilter} id="filterIcon"/>
		  {value || " Filter "}
          <FontAwesomeIcon icon={faSortDown} aria-hidden="false" />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="w-[22%] bg-[var(--background-color)] rounded-md mt-2 transition
          data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
          data-[enter]:duration-100 data-[enter]:ease-out absolute z-50
          data-[leave]:duration-75 data-[leave]:ease-in shadow-md"
      >
        <MenuItem>
          <button
            onClick={() => onChange("All")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-sm text-left mt-1 "
          >
            All
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => onChange("Most Relevant")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            Most Relevant
          </button>
        </MenuItem>
        <MenuItem>
          <button
            onClick={() => onChange("Newest")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm"
          >
            Newest
          </button>
        </MenuItem>

        <MenuItem>
          <button
            onClick={() => onChange("Oldest")}
            className="px-2 py-1 w-[100%] hover:bg-[var(--brighter-bg-color)] transition-colors
               font-semibold text-left text-sm mb-1"
          >
            Oldest
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
