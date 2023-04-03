import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles/GlobalStyles";
import "./index.css";
import CartContextProvider from "./store/cart-context";

const rootEle = ReactDOM.createRoot(document.getElementById("root"));

rootEle.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
    <GlobalStyles />
  </React.StrictMode>
);
