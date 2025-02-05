import NotifDropdownMenu from "./NotifDropdownMenu.jsx";
import "./Actions.css";
import { Link } from "react-router-dom";

export default function Actions() {
  return (
    <div className="actions">
      <NotifDropdownMenu />
      <button onClick={() => (window.location.hash = "#settings")}>
        <i className="fa fa-question-circle" aria-hidden="true"></i>
      </button>
      <div className="account">
        <Link to="/profile-page">
          <span className="greeting">Hello, Marshal</span>
        </Link>
        <Link to="/profile-page">
        <img
          src="https://i.pinimg.com/736x/63/d4/2b/63d42bcfc3ce97414d78f14ae76f61c8.jpg"
          alt="Profile Picture"
        />
        </Link>
        <div className="account-panel">
          <div className="account-info">
            <img
              src="https://i.pinimg.com/736x/63/d4/2b/63d42bcfc3ce97414d78f14ae76f61c8.jpg"
              alt="Profile Picture"
            />
            <div className="details">
              <span className="nickname">Marshal</span>
              <span className="username">@marshal_dev</span>
            </div>
          </div>
          <ul className="account-options">
            <li>
              <a href="#general-settings">
                <i className="fa fa-cogs"></i> Settings
              </a>
            </li>
            <li>
              <a href="#help">
                <i className="fa fa-question-circle"></i> Help
              </a>
            </li>
            <li>
              <a href="#logout">
                <i className="fa fa-sign-out"></i> Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
