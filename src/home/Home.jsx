import React from "react";
import "../home/home.scss";
import { AcUnit } from "@mui/icons-material";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";

export default function Home() {
  return (
    <div className="home">
      <Navbar />

      <Featured />
      <List />
    </div>
  );
}
