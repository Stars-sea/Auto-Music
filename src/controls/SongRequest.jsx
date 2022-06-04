import React from "react";

import "../css/SongRequest.css"

import BlurBg from "../components/BlurBg.jsx";
import Title from "../components/Title.jsx";

export default class SongRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_box">
        <BlurBg />
        <Title title={this.props.title.main} subTitle={this.props.title.sub} />
      </div>
    );
  }
}
