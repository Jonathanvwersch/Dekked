import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />

    </Router>
  </React.StrictMode>,
  document.getElementById("dekked-app-container")
);

reportWebVitals();
