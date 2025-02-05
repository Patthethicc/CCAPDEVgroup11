import "../components/LogIn&SignUp/loginpage.css";
import Logo from "../components/LogIn&SignUp/Logo";
import LogInText from "../components/LogIn&SignUp/LogInText";
import LogInForm from "../components/LogIn&SignUp/LogInForm";
import LandingHeader from "../components/Landing/LandingHeader";

export default function LogInPage() {
    return (
        <div className="login-page">
            <LandingHeader />
            <Logo />
            <div className="main2">
                <div className="outerpad">
                    <div className="innerpad">
                        <LogInText />
                        <LogInForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
