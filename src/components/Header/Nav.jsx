import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/">Contact Us</Link>
    </nav>
  );
}
