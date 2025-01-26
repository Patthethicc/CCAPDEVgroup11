import "./Header.css";
import SearchBar from "./SearchBar.jsx";
import Nav from "./Nav.jsx";

export default function Header() {
  return (
    <header>
      <div className="logo">Pro-Ject</div>
      <SearchBar />
      <Nav />
    </header>
  );
}
