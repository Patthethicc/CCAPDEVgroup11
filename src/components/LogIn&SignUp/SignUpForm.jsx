import "./loginpage.css"

export default function SignUpForm() {
    return(
        <form>
            <input className="input" type="text" placeholder="Username" size="30px"/>
            <input className="input" type="text" placeholder="Email" size="30px"/>
            <input className="input" type="password" placeholder="Password" size="30px"/>
            <button type="submit" className="button">Create Account</button>
            <a href="#" className="links">Already have an account? Click here to log in</a>
        </form>
    );
}