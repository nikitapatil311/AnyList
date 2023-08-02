import styles from "../styles/GroceryList.module.css";
import GroceryCard from "../components/GroceryCard";
import SearchBar from "./SearchBar";
import React, { useState } from "react";

const GroceryList = ({ groceryList }) => {
  const [searchQuery, setSearchQuery] = useState("");
  // Filter the grocery list based on the search query
  const filteredGroceryList = groceryList.filter((grocery) =>
    grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />;

  return (
    <div className={styles.container}>
      <h1>Shop Groceries</h1>

      <div className={styles.wrapper}>
        {groceryList.map((grocery) => (
          <GroceryCard key={grocery._id} grocery={grocery} />
        ))}
      </div>
    </div>
  );
};

export default GroceryList;
