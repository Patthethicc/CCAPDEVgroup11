import { Link } from "react-router-dom";
import "./loginpage.css"

export default function LogInForm() {
    return(
        <form>
            <input className="input" type="text" placeholder="Username or Email" size="30px"/>
            <input className="input" type="password" placeholder="Password" size="30px"/>
            <a href="#" className="links">Forgot Password?</a>
            <Link to="/home-page">
                <button type="submit" className="button-logsign">Log In</button>
            </Link>
            <Link to="/signup-page" className="links">
                Don&apost have an account yet? Click to create one!
            </Link>
        </form>
    );
}