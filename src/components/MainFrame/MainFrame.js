import React, { useState, useEffect, useRef } from "react";
import Button from "../Buttons/Button";
import StudyQueue from "../General/StudyQueue";
import TopBar from "./TopBar";
import { useLocation, withRouter } from "react-router";
import "./MainFrame.css";
import FolderBinderHome from "./FolderBinder/FolderBinderHome";

function MainFrame({
  sidebar,
  handleSidebar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
}) {
  const expandedSidebarWidth = 220;
  const [frameWidth, setFrameWidth] = useState(
    window.innerWidth - (sidebar ? expandedSidebarWidth : 0)
  );

  const titleRef = useRef();
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
        <div className="dekked-page-content-container">
          {location.state ? (
            location.state.type === "folder" ||
            location.state.type === "binder" ? (
              <FolderBinderHome
                folderBlocks={folderBlocks}
                handleFolderBlocks={handleFolderBlocks}
                handleNameChange={handleNameChange}
              />
            ) : null
          ) : null}
        </div>
        <StudyQueue />
      </div>
    </>
  );
}

export default withRouter(MainFrame);
