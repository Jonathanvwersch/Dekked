import React from "react";
import StudyQueue from "../General/StudyQueue";
import TopBar from "./TopBar";

function MainFrame() {
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
        }}
      >
        <div style={{ width: "100%", maxWidth: "100vw", zIndex: "9" }}>
        <TopBar/>
        </div>
        <StudyQueue/>
      </div>
    </>
  );
}

export default MainFrame;
