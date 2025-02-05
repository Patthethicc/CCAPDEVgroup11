import "./landingpage.css";

export default function LandingHeader() {
    return (
        <header>
            <div className="logo">P r o - J e c t</div>
            <div className="search-bar">
                <input type="text" placeholder="Search for a project" />
                <button type="submit">
                    <i className="fa fa-search"></i>
                </button>
            </div>

            <nav>
                <a href="#">About</a>
                <a href="#">Contact Us</a>
            </nav>
        </header>
    );
}
