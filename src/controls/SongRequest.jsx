import React from "react";

import "../css/modules/SongRequest.css";

import Title from "../components/Title.jsx";
import MusicList from "../components/MusicList.jsx";
import InputBox from "../components/InputBox.jsx";

export default class SongRequest extends React.Component {
  constructor(props) {
    super(props);

    this.idPattern = /^[0-9]+$/;
    this.songPattern = /^https?:\/\/music.163.com\/#\/song\?id=[0-9]+?$/i;
  }

  checkUrl = (text) => {
    // TODO: online check
    if (this.idPattern.test(text))
      console.log({ id: text })
    else if (this.songPattern.test(text))
      console.log({text});
  }

  render() {
    return (
      <div className="main_box blur_bg">
        <Title title={this.props.title.main} subTitle={this.props.title.sub} />

        <div className="content_box">
          <MusicList />
          <InputBox 
            placeholder="输入有效的网易云音乐链接或 ID"
            onTextChanged={this.checkUrl}
          />
        </div>
      </div>
    );
  }
}
