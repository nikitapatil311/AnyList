import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import Head from "next/head";

import Featured from "../../components/Featured";
import GroceryList from "../../components/GroceryList";
//import Footer from "../../components/Footer";
const inter = Inter({ subsets: ["latin"] });

{
  /* <style jsx global>{`
  body {
    margin: 0;
    padding: 0;
  }
`}</style>; */
}

export default function Home({ groceryList }) {
  return (
    <>
      {/* hey i am homePage remove me at the end */}
      <Head>
        <title>Grocery Shop</title>
        <meta name="description" content="Best Grocery Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <GroceryList groceryList={groceryList} />
      {/* <Footer /> */}
    </>
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
