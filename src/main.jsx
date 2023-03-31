import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import "./index.css";

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>
);
