import "../components/LogInSignUp/loginpage.css";
import Logo from "../components/LogInSignUp/Logo";
import SignUpText from "../components/LogInSignUp/SignUpText";
import SignUpForm from "../components/LogInSignUp/SignUpForm";
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
