import "./SearchBar.css";
import { useState, useEffect } from "react";

export default function SearchBar({ search, handleSearch }) {
  const [searchTerm, setSearchTerm] = useState(search);

  const handleSubmit = function (e) {
    e.preventDefault();
    if (searchTerm.trim()) {
      handleSearch(searchTerm);
    } else {
      handleSearch("");
    }
  };

  return (
    <form className="search-bar flex-row" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a project"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="ml-20">
        <i className="fa fa-search mr-0"></i>
      </button>
    </form>
  );
}
