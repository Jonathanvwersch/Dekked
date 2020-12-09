import "./App.css";
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SideBar from "./components/SideBar/SideBar";
import MainFrame from "./components/MainFrame/MainFrame";

function App() {
  return (
    <>
    <Router>
      <SideBar />
      <Switch>
        <Route path ="/" />
      </Switch>
    </Router>
      <MainFrame/>
    </>
  );
}

export default App;
