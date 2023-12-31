import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "./list.scss";
import ListItem from "../listItem/ListItem";
import { useState } from "react";

export default function List() {
  const [slideNumber, setslideNumber] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    return (
      <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
          <ArrowBackIosOutlined
            className="slideArrow left"
            onClick={() => handleClick("left")}
          />
          <div className="container" ref={listRef}>
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
          <ArrowForwardIosOutlined
            className="slideArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    );
  };
}
