import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import React from "react";
import "../navbar/Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img
            src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png"
            alt=""
          />
          <span>Home Page</span>
          <span>Movies </span>
          <span>Series </span>
          <span>New and Popular </span>
          <span>My List </span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Kid</span>
          <Notifications className="icon" />
          <img src="" alt="" />
          <ArrowDropDown />
        </div>
      </div>
    </div>
  );
}
