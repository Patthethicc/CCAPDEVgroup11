import "./loginpage.css"

export default function LogInForm() {
    return(
        <form>
            <input className="input" type="text" placeholder="Username or Email" size="30px"/>
            <input className="input" type="password" placeholder="Password" size="30px"/>
            <a href="#" className="links">Forgot Password?</a>
            <button type="submit" className="button-logsign">Log In</button>
            <a href="#" className="links">Don&apost have an account yet? Click to create one!</a>
        </form>
    );
}