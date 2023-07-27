import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search for groceries..."
      value={searchQuery}
      onChange={handleSearchInputChange}
    />
  );
};

export default SearchBar;
