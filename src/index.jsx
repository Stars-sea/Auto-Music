import './css/normalize.css'
import './css/index.css';

import React from "react";
import { createRoot } from "react-dom/client";

import SongRequest from "./controls/SongRequest.jsx";

function App() {
  return (
    <SongRequest title={{
      main: "Auto Music🎵",
      sub: "二班专属点歌网页"
    }}/>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
