import React from "react";
import "../css/modules/Title.css";

export default function Title(props) {
  return (
    <div className="title_box">
      <h1 className="title">{props.title}</h1>
      <h4 className="title sub">{props.subTitle}</h4>
    </div>
  );
}