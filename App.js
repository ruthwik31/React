/*const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

<div id="parent">
  <div id="child">
    <h1>Hello im h1</h1>
  </div>
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h3", { id: "child" }, [
    React.createElement("h1", {}, "hai im child"),
    React.createElement("h2", {}, "hai im child"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
