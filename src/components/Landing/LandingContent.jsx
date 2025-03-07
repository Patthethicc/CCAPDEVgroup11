import "./landingpage.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function LandingContent() {
  return (
    <div className="group-landing ">
      <TypeAnimation
        className="maintitle-landing"
        sequence={["P r o - J e c t"]}
        wrapper="span"
        speed={30}
        style={{
          margin: 0,
          fontSize: "125px",
          fontFamily: "Room Handmade",
          display: "inline-block",
        }}
        repeat={0}
      />

      <h3 className="tagline-landing">bridging the gap</h3>
      <table className="table1 spaceBetweenCells">
      <tbody>
        <tr>
          <td>
            <Link to="login">
              <button type="button" className="button transition-colors">
                Log In
              </button>
            </Link>
          </td>
          <td>
            <Link to="signup">
              <button type="button" className="button transition-colors">
                Sign Up
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
}
