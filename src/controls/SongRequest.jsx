import React from "react";

import "../css/modules/SongRequest.css";

import Title from "../components/Title.jsx";
import MusicList from "../components/MusicList.jsx";
import InputBox from "../components/InputBox.jsx";

export default class SongRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main_box">
        <span className="blur_bg1"></span>
        <Title title={this.props.title.main} subTitle={this.props.title.sub} />

        <div className="content_box">
          <MusicList />
          <InputBox />
        </div>
      </div>
    );
  }
}
