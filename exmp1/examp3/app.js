import React from "react";
import ReactDOM from "react-dom/client";

// video content

// const jsxHeading = <h1 className="bgColor">This is jsx1</h1>;
// const MainHeading = () => (
//   <div>
//     {/* <JsxHeading /> */}
//     {jsxHeading}
//     <h1>This is Main Heading</h1>
//   </div>
// );

//coding assignment

const Header = () => (
  <>
    <div>
      <img src="https://images.app.goo.gl/kbMAuF8S7iLsb4Yb7" alt="img" />
      <input type="text" />
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
