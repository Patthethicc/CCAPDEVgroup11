import LandingContent from "../components/Landing/LandingContent";
import LandingHeader from "../components/Landing/LandingHeader";
import "../components/Landing/landingpage.css"

export default function LandingPage() {
    return (
        <div className="body-landing">
            <LandingHeader />
            <div className="main-landing">
                <LandingContent />
            </div>
        </div>
    );
}
