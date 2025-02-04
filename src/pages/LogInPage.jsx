import "../components/LogIn&SignUp/loginpage.css"
import "../components/Landing/page.css"
import Logo from "../components/LogIn&SignUp/Logo"
import LogInText from "../components/LogIn&SignUp/LogInText"
import LogInForm from "../components/LogIn&SignUp/LogInForm"
import LandingHeader from "../components/Landing/LandingHeader"


export default function LogInPage() {
    return (
        <body>
            <LandingHeader />
            <Logo />
            <main className="main2">
            <div className="outerpad">
                <div className="innerpad">
                    <LogInText />
                    <LogInForm />
                </div>
            </div>
            </main>

        </body>
    );
}