import "./landingpage.css";

export default function LandingContent() {
    return (
        <div className="group-landing">
            <h1 className="maintitle-landing"><b>P r o - J e c t</b></h1>
            <h3 className="tagline-landing"><b>bridging the gap</b></h3>
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
