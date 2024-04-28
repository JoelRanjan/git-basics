const heading = React.createElement(
  "h1",
  { class: "colorHeading" },
  "hello world from react"
);
const para = React.createElement("p", { id: "para" }, "para");
console.log("jhgfd");
const child = React.createElement("div", { id: "child" }, [heading, para]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
