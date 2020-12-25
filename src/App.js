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
import { v4 as uuidv4 } from "uuid";

function App() {
  const [sidebar, setSidebar] = useState(true);
  const [folderBlocks, setFolderBlocks] = useState([
    {
      name: "Welcome to Dekked",
      type: "folder",
      id: "f73932jff8393d",
      iconColour: "#2C2C31",
      isOpen: true,
      binders: [
        {
          name: "Getting Started",
          type: "binder",
          id: "f73932j4fd393d",
          folderId: "f73932jff8393d",
          iconColour: "#2C2C31",
          isOpen: true,
          studySets: [
            {
              name: "Tutorial",
              type: "studySet",
              id: uuidv4(),
              binderId: "f73932j4fd393d",
              folderId: "f73932jff8393d",
              iconColour: "#2C2C31",
              tab: "notes",
            },
          ],
        },
      ],
    },
  ]);

  const addFolder = () => {
    const newFolderBlocksArray = folderBlocks.slice();
    const newFolder = {
      name: "",
      type: "folder",
      id: uuidv4(),
      iconColour: "#2C2C31",
      isOpen: false,
      binders: [],
    };
    newFolderBlocksArray.push(newFolder);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const addFolderToNewArray = (newFolderBlocksArray) => {
    const newFolder = {
      name: "",
      type: "folder",
      id: uuidv4(),
      iconColour: "#2C2C31",
      isOpen: false,
      binders: [],
    };
    newFolderBlocksArray.push(newFolder);
    return newFolderBlocksArray;
  };

  const handleFolderBlocks = (newFolderBlocksArray) => {
    if (newFolderBlocksArray.length === 0)
      addFolderToNewArray(newFolderBlocksArray);
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
          addFolder={addFolder}
          addFolderToNewArray={addFolderToNewArray}
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
                pathname: `/${folderBlocks[0].type}/${folderBlocks[0].id}`,
                state: {
                  type: folderBlocks[0].type,
                  name: folderBlocks[0].name,
                  folderIndex: 0,
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
