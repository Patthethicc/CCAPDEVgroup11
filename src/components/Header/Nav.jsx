import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/about">About Us</Link>
    </nav>
  );
}
