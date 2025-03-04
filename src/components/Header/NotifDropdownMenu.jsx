import "./NotifDropdownMenu.css";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";

export default function NotifDropdownMenu() {
  const notificationData = [
    {
      id: 1,
      author: "celeste_stars",
      profilePicture:
        "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
      details: 'commented on your project "this is amazing!"',
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "ray_m0nd",
      profilePicture:
        "https://i.pinimg.com/736x/b9/d9/cd/b9d9cdef53ec98bfaeebb66c3247e52c.jpg",
      details: "upvoted your post!",
      timestamp: "15 hours ago",
    },
    // add more notifs here
  ];

  return (
    <Menu as="div" className="notif-dropdown-menu">
      <div>
        <MenuButton className="button">
          <i className="fa fa-bell" />
          <span className="dot animate-ping" />
          <span className="dot " />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="menu-items data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0
        data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in"
      >
        {notificationData.map((notification) => (
          <MenuItem key={notification.id}>
            <div className="notification-post">
              <img
                src={notification.profilePicture}
                alt="Profile Picture"
                className="profile-picture"
              />
              <div className="meta">
                <a href="#" className="author">
                  {notification.author}
                </a>
                <span className="details">{notification.details}</span>
                <span className="timestamp">{notification.timestamp}</span>
              </div>
            </div>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

/* import "./NotifDropdownMenu.css";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

export default function NotifDropdownMenu() {
  return (
    <Menu as="div" className="text-left relative">
      <div>
        <MenuButton
          className="menu-button inline-flex bg-[var(--background-color)] w-[18%] 
            text-sm shadow-md rounded-md font-semibold p-1 gap-x-2
            hover:bg-[var(--brighter-bg-color)] transition-colors"
        >
          <i className="fa fa-bell" />
          <span className="dot" />
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
}*/
