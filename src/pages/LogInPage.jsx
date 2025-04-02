import "../components/LogInSignUp/loginpage.css";
import Logo from "../components/LogInSignUp/Logo";
import LogInText from "../components/LogInSignUp/LogInText";
import LogInForm from "../components/LogInSignUp/LogInForm";
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
