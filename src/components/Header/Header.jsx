import "./Header.css";
import SearchBar from "./SearchBar.jsx";
import Nav from "./Nav.jsx";
import Actions from "./Actions.jsx";

export default function Header({ handleSearch, search }) {
  return (
    <header>
      <div className="logo">P r o - J e c t</div>
      <Nav />
      <SearchBar handleSearch={handleSearch} search={search} />
      <Actions />
    </header>
  );
}
