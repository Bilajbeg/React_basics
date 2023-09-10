//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const name = "Emelin";
const num = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name}</h1>
    <p>Your luck number is {num}</p>
  </div>,
  document.getElementById("root")
);
