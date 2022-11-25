import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/scss/style.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
