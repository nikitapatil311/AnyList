import React from "react";
import styles from "../styles/Search.module.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <input
        className={styles.container}
        type="text"
        placeholder="Search for groceries..."
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchBar;
