import "./Header.css";
import SearchBar from "./SearchBar.jsx";
import Nav from "./Nav.jsx";
import Actions from "./Actions.jsx";

export default function Header() {
  return (
    <header>
      <div className="logo">Pro-Ject</div>
      <Nav />
      <SearchBar />
      <Actions />
    </header>
  );
}
