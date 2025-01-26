import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search for a project" />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
