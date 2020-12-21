import React, { useState, useEffect, useRef } from "react";
import StudyQueue from "../General/StudyQueue";
import TopBar from "./TopBar";
import { useLocation, withRouter } from "react-router";
import "./MainFrame.css";
import FolderBinder from "./FolderBinder/FolderBinder";
import Toolbar from "./StudySet/Toolbar";
import { NavLink } from "react-router-dom";
import StudySet from "./StudySet/StudySet";

function MainFrame({
  sidebar,
  handleSidebar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
}) {
  const titleRef = useRef();
  const expandedSidebarWidth = 220;
  const [frameWidth, setFrameWidth] = useState(
    window.innerWidth - (sidebar ? expandedSidebarWidth : 0)
  );

  let location = useLocation();

  useEffect(() => {
    if (sidebar) setFrameWidth(window.innerWidth - expandedSidebarWidth);
    else setFrameWidth(window.innerWidth);
  }, [sidebar]);

  //Update frame width on each rerender
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newFrameWidth = window.innerWidth - sidebarWidth;
      setFrameWidth(newFrameWidth);
    };
    const sidebarWidth = sidebar ? expandedSidebarWidth : 0;
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      return window.removeEventListener("resize", updateWindowDimensions);
    };
  });
  return (
    <>
      <div
        className="dekked-frame"
        style={{
          flexGrow: "1",
          flexShrink: "1",
          display: "flex",
          flexDirection: "column",
          background: "white",
          zIndex: "1",
          height: "100vh",
          maxHeight: "100%",
          width: `${frameWidth}px`,
        }}
      >
        <div style={{ width: "100%", maxWidth: "100vw", zIndex: "9" }}>
          <TopBar
            folderBlocks={folderBlocks}
            sidebar={sidebar}
            handleSidebar={handleSidebar}
          />
        </div>
        <div className="dekked-main-page">
          {location.state ? (
            location.state.type === "folder" ||
            location.state.type === "binder" ? (
              <FolderBinder
                folderBlocks={folderBlocks}
                handleFolderBlocks={handleFolderBlocks}
                handleNameChange={handleNameChange}
              />
            ) : (
              <StudySet
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
