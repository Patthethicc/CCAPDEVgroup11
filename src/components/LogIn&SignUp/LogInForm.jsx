import "./loginpage.css"

export default function LogInForm() {
    return (
        <form>
            <input className="input mt-3 p-2 text-md" type="text" placeholder="Username or Email" />
            <input className="input" type="password" placeholder="Password" size="30px" />
            <a href="#" className="links">Forgot Password?</a>
            <button type="submit" className="button-logsign transition-colors">Log In</button>
            <a href="#" className="links">Don't have an account yet? Click to create one!</a>
        </form>
    );
}
