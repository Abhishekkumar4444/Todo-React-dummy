import React from "react";
import "./Footer.css";

const SearchForm = ({ search, setSearch }) => {
  return (
    <form>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    </form>
  );
};

export default SearchForm;
