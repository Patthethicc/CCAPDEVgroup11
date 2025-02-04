import LandingContent from "../components/Landing/LandingContent"
import LandingHeader from "../components/Landing/LandingHeader"
import "../components/Landing/page.css"

export default function LandingPage() {
    return (
        <div className="body-landing">
            <LandingHeader />
            <LandingContent />
        </div>
    );
}