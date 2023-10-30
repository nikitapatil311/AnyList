import React from "react";
import "../home/home.css";
import { AcUnit } from "@mui/icons-material";
import Navbar from "../components/navbar/Navbar";

export default function Home() {
  return (
    <div className="home">
      <AcUnit />
      <Navbar />
    </div>
  );
}
