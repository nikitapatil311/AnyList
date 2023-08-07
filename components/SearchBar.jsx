import React from "react";
import styles from "../styles/Search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className={styles.searchfull}>
        <div className={styles.icon}>
          <AiOutlineSearch className="w-4 text-gray-600" />
        </div>
        <input
          className={styles.container}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
    </>
  );
};

export default SearchBar;
