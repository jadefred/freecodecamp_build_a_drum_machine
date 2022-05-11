import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//Components
import Wrapper from "./components/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>
);
