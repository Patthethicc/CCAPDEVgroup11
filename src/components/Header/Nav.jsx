import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/my-projects">My Projects</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/notifs">Notifications</Link>
    </nav>
  );
}
