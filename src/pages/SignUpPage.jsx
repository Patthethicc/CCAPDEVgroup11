import "../components/LogIn&SignUp/loginpage.css";
import Logo from "../components/LogIn&SignUp/Logo";
import SignUpText from "../components/LogIn&SignUp/SignUpText";
import SignUpForm from "../components/LogIn&SignUp/SignUpForm";
import LandingHeader from "../components/Landing/LandingHeader";

export default function SignUpPage() {
    return (
        <div className="signup-page">
            <LandingHeader />
            <Logo />
            <main className="main2">
                <div className="outerpad">
                    <div className="innerpad">
                        <SignUpText />
                        <SignUpForm />
                    </div>
                </div>
            </main>
        </div>
    );
}
