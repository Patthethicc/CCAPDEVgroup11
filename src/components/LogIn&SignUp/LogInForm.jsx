import { Link } from "react-router-dom";
import "./loginpage.css"

export default function LogInForm() {
    return (
        <form>
            <input className="input mt-3 p-2 text-md" type="text" placeholder="Username or Email" />
            <input className="input" type="password" placeholder="Password" size="30px" />
            <a href="#" className="links">Forgot Password?</a>
            <Link to="/home">
                <button type="submit" className="button-logsign transition">Log In</button>
            </Link>
            <Link to="/signup" className="links">
                Don&apos;t have an account yet? Click to create one!
            </Link>
        </form>
    );
}
