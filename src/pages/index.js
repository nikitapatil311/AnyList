import Image from "next/image";
import { Inter } from "next/font/google";
import axios from "axios";
import Head from "next/head";
import Add from "../../components/Add";
import AddButton from "../../components/AddButton";

import Featured from "../../components/Featured";
import GroceryList from "../../components/GroceryList";
//import Footer from "../../components/Footer";
const inter = Inter({ subsets: ["latin"] });
import { useState } from "react";

{
  /* <style jsx global>{`
  body {
    margin: 0;
    padding: 0;
  }
`}</style>; */
}

export default function Home({ groceryList, admin }) {
  const [close, setClose] = useState(true);
  return (
    <>
      {/* hey i am homePage remove me at the end */}
      <Head>
        <title>Grocery Shop</title>
        <meta name="description" content="Best Grocery Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <GroceryList groceryList={groceryList} />
      {/* <Footer /> */}
      {!close && <Add setClose={setClose} />}
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      groceryList: res.data,
      admin,
    },
  };
};
