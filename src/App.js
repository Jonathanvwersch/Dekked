import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainFrame from "./components/MainFrame/MainFrame";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [folderBlocks, setFolderBlocks] = useState([]);

  const handleFolderBlocks = (newFolderBlocksArray) => {
    setFolderBlocks(newFolderBlocksArray);
  };

  const handleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  return (
    <>
      <Router>
        <Sidebar
          sidebar={sidebar}
          handleSidebar={handleSidebar}
          folderBlocks={folderBlocks}
          handleFolderBlocks={handleFolderBlocks}
        />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
      <MainFrame
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        folderBlocks={folderBlocks}
        handleFolderBlocks={handleFolderBlocks}
      />
    </>
  );
}

export default App;
