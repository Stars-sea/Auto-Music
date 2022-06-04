import './css/normalize.css'
import './css/index.css';

import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <p>Hello world</p>
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);