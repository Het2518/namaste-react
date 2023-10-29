cls
// <div>
//  <div>
//      <h1></h1>
//  </div>
// </div>
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am H1 tag")
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
