import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,

} from "@mui/icons-material";
import React from "./list.scss";
import ListItem from "../listItem/ListItem";

export default function List() {

    const listRef = useRef()
  const handleClick = (direction) => {
    if(direction === "left")
  };
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
}
