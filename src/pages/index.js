import Image from "next/legacy/image";
//import { Inter } from "next/font/google";
import axios from "axios";
import Head from "next/head";
import Add from "../../components/Add";
//import AddButton from "../../components/AddButton";
import styles from "../../styles/Home.module.css";
import { useSession } from "next-auth/react";

import Featured from "../../components/Featured";
import GroceryList from "../../components/GroceryList";
//import Footer from "../../components/Footer";
//const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";
import SearchBar from "../../components/SearchBar";

export default function Home({ groceryList }) {
  const [close, setClose] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Add this line to create the search query state

  // Filter the grocery list based on the search query
  const filteredGroceryList = groceryList.filter((grocery) =>
    grocery.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Grocery Shop</title>
        <meta name="description" content="Best Grocery Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {/* <AddButton setClose={setClose} /> */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <GroceryList groceryList={filteredGroceryList} />

      {!close && <Add setClose={setClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      groceryList: res.data,
    },
  };
};
