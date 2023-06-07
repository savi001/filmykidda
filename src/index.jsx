// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { FilterContextProvider } from "./context/context";

ReactDOM.render(
    <FilterContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </FilterContextProvider>,

  document.getElementById("root")
);
