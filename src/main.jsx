import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import OneComponent from "./components/oneComponen.jsx";
import SecondComponent from "./components/second/second.jsx";
import Third from "./components/third_conp/third.jsx";
import Four from "./components/four_compo/four.jsx";
import Five from "./components/five_comp/five.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <OneComponent />
    <SecondComponent />
    <Third />
    <Four />
    <Five />
  </React.StrictMode>
);
