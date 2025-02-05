import "./loginpage.css"
import { Link } from "react-router-dom";

export default function SignUpForm() {
            return (
                        <form>
                                    <input className="input" type="text" placeholder="Username" size="30px" />
                                    <input className="input" type="text" placeholder="Email" size="30px" />
                                    <input className="input" type="password" placeholder="Password" size="30px" />
                                    <Link to="/login">
                                                <button type="submit" className="button-logsign">Create Account</button>
                                    </Link>
                                    <Link to="/login" className="links">
                                                Already have an account? Click here to log in
                                    </Link>
                        </form>
            );
}
