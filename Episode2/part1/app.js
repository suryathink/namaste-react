import React from "react";
import ReactDOM from "react-dom/client";

/**
 * <div id="parent">
 *   <div id ="child">
 *       <h1>I'm h1 tag</h1>
 *       <h2>I'm h2 tag</h2>
 *    </div>
 * </div>
 *
 **/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
