import React, { useState, useEffect } from "react";
import StudyQueue from "../General/StudyQueue";
import PageContent from "./PageContent";
import TopBar from "./TopBar";

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
          <TopBar sidebar={sidebar} handleSidebar={handleSidebar} />
        </div>
        <PageContent
          folderBlocks={folderBlocks}
          handleFolderBlocks={handleFolderBlocks}
          handleNameChange={handleNameChange}
        />
        <StudyQueue />
      </div>
    </>
  );
}

export default MainFrame;
