import React from "react";
import StudyQueue from "../General/StudyQueue";
import TopBar from "./TopBar";
import { useLocation, withRouter } from "react-router";
import "./MainFrame.css";
import FolderBinder from "./FolderBinder/FolderBinder";
import StudySet from "./StudySet/StudySet";

function MainFrame({
  sidebar,
  handleSidebar,
  setHoverbar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
  addBinder,
  addStudySet,
}) {
  let location = useLocation();

  return (
    <>
      <div className="dekked-frameContainer">
        <div id="topBarContainer">
          <TopBar
            folderBlocks={folderBlocks}
            sidebar={sidebar}
            handleSidebar={handleSidebar}
            setHoverbar={setHoverbar}
          />
        </div>
        <div className="dekked-frame">
          {location.state ? (
            location.state.type === "folder" ||
            location.state.type === "binder" ? (
              <FolderBinder
                folderBlocks={folderBlocks}
                handleNameChange={handleNameChange}
                addBinder={addBinder}
                addStudySet={addStudySet}
              />
            ) : (
              <StudySet
                sidebar={sidebar}
                folderBlocks={folderBlocks}
                handleNameChange={handleNameChange}
                handleFolderBlocks={handleFolderBlocks}
              />
            )
          ) : null}
        </div>
        <StudyQueue />
      </div>
    </>
  );
}

export default withRouter(MainFrame);
