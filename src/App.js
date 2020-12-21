import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MainFrame from "./components/MainFrame/MainFrame";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [folderBlocks, setFolderBlocks] = useState([
    {
      name: "Welcome to Dekked",
      type: "folder",
      id: Math.random(),
      iconColour: "#2C2C31",
      isOpen: true,
      binders: [
        {
          name: "Getting Started",
          type: "binder",
          id: Math.random(),
          iconColour: "#2C2C31",
          isOpen: true,
          studySets: [
            {
              name: "Tutorial",
              type: "studySet",
              id: Math.random(),
              iconColour: "#2C2C31",
              tab: "notes"
            },
          ],
        },
      ],
    },
  ]);

  const handleFolderBlocks = (newFolderBlocksArray) => {
    setFolderBlocks(newFolderBlocksArray);
  };

  const handleNameChange = (
    type,
    folderIndex,
    binderIndex,
    studySetIndex,
    blockName
  ) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder") {
      newFolderBlocksArray[folderIndex].name = blockName;
      console.log("hello");
    } else if (type === "binder") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].name = blockName;
    } else if (type === "studySet") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[
        studySetIndex
      ].name = blockName;
    }
    handleFolderBlocks(newFolderBlocksArray);
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
          handleNameChange={handleNameChange}
        />

        <Switch>
          <Route path="/">
            <MainFrame
              folderBlocks={folderBlocks}
              sidebar={sidebar}
              handleSidebar={handleSidebar}
              handleNameChange={handleNameChange}
              handleFolderBlocks={handleFolderBlocks}
            />
            <Redirect
              to={{
                pathname: `/${folderBlocks[0].binders[0].studySets[0].type}/${folderBlocks[0].binders[0].studySets[0].tab}/${folderBlocks[0].binders[0].studySets[0].id}`,
                state: {
                  type: folderBlocks[0].binders[0].studySets[0].type,
                  name: folderBlocks[0].binders[0].studySets[0].name,
                  folderIndex: 0,
                  binderIndex: 0,
                  studySetIndex: 0,
                  tab: folderBlocks[0].binders[0].studySets[0].tab,
                },
              }}
            />
          </Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
