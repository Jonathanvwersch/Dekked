import React, { useState, useEffect, useRef } from "react";
import Button from "../Buttons/Button";
import StudyQueue from "../General/StudyQueue";
import TopBar from "./TopBar";
import { useLocation, withRouter } from "react-router";
import "./MainFrame.css";
import FolderBinderHome from "./FolderBinderHome";

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
  useEffect(() => {
    if (location.state && document.activeElement !== titleRef.current) {
      if (location.state.type === "folder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].name;
      } else if (location.state.type === "binder") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].name;
      } else if (location.state.type === "studySet") {
        titleRef.current.innerText =
          folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].name;
      }
    }
  }, [folderBlocks, location.state]);

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
          <TopBar folderBlocks={folderBlocks} sidebar={sidebar} handleSidebar={handleSidebar} />
        </div>
        <div className="dekked-page-content-container">
          <div className="page-header-container">
            <div className="page-header">
              <div className="page-title">
                <h2
                  contentEditable={true}
                  ref={titleRef}
                  spellCheck={false}
                  onKeyDown={(e) => {
                    if (location.state) {
                      if (e.key === "Enter") {
                        e.preventDefault();
                      }
                      setTimeout(function () {
                        handleNameChange(
                          location.state.type,
                          location.state.folderIndex,
                          location.state.binderIndex,
                          location.state.studySetIndex,
                          titleRef.current.innerText
                        );
                      }, 100);
                    }
                  }}
                ></h2>
              </div>
              <div id="button-quantity">
                <p className="p2 quantity">
                  {location.state
                    ? location.state.type === "folder"
                      ? `${
                          folderBlocks[location.state.folderIndex].binders
                            .length
                        } binder(s)`
                      : `${
                          folderBlocks[location.state.folderIndex].binders[
                            location.state.binderIndex
                          ].studySets.length
                        } study set(s)`
                    : null}
                </p>
                <Button type="primary" action="Study" />
              </div>
            </div>
          </div>

          <div className="dekked-page-content">
            {location.state ? (
              location.state.type === "folder" ||
              location.state.type === "binder" ? (
                <FolderBinderHome
                  folderBlocks={folderBlocks}
                  handleFolderBlocks={handleFolderBlocks}
                />
              ) : null
            ) : null}
          </div>
        </div>
        <StudyQueue />
      </div>
    </>
  );
}

export default withRouter(MainFrame);
