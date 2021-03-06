import React from "react";

import "../css/modules/InputBox.css"

export default function InputBox(props) {
  return (
    <div className="input_container blur_bg">
      <input
        className="input_box" type="text"
        onInput={e => props.onTextChanged(e.target.value)}
        placeholder={props.placeholder}
      />
    </div>
  )
}
