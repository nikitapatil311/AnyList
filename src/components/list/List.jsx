import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "./list.scss";
import ListItem from "../listItem/ListItem";

export default function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <div className="container">
          <ListItem />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
}
