import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "h1",
  { class: "colorBg" },
  "this is heading1"
);
const root = ReactDOM.createRoot(document.getElementById("parent"));

root.render(parent);
