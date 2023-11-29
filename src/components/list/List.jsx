import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import React from "./list.scss";

export default function List() {
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined />
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
}
