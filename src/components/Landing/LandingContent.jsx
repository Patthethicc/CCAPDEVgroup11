import "./landingpage.css";

export default function LandingContent() {
    return (
        <div className="group">
            <h1 className="maintitle">P r o - J e c t</h1>
            <h3 className="tagline">bridging the gap</h3>
            <table className="table1 spaceBetweenCells">
                <tr>
                    <th>
                        <td>
                            <button type="button" className="button">
                                Log In
                            </button>
                        </td>
                    </th>
                    <th>
                        <td>
                            <button type="button" className="button">
                                Sign Up
                            </button>
                        </td>
                    </th>
                </tr>
            </table>
        </div>
    );
}
