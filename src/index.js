import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MainPage from "./pages/_main";
import "./global.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
