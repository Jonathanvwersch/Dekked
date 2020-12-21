import "./StudySet.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Toolbar from "../StudySet/Toolbar";
import { NavLink } from "react-router-dom";
import StudySetNotes from "./StudySetNotes";
import StudySetFlashcards from "./StudySetFlashcards";

function StudySet({ folderBlocks, handleNameChange, handleFolderBlocks }) {
  let location = useLocation();
  const titleRef = useRef();

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
    <div className="dekked-studySet">
      {location.state ? (
        <>
          <div className="dekked-page-header-container">
            <div className="dekked-page-header">
              <div className="toolbar-tab">
                <Toolbar type="full" />
                <div id="studySet-switcher">
                  {location.state ? (
                    <>
                      <NavLink
                        activeStyle={{
                          textDecoration: "underline",
                          textDecorationColor: "var(--primary-color)",
                          color: "var(--main-black)",
                          fontWeight: "700",
                          textDecorationThickness: "2px",
                        }}
                        to={{
                          pathname: `/studySet/notes/${
                            folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].id
                          }`,
                          state: {
                            name: location.state.name,
                            type: location.state.type,
                            folderIndex: location.state.folderIndex,
                            binderIndex: location.state.binderIndex,
                            studySetIndex: location.state.studySetIndex,
                            tab: "notes",
                          },
                        }}
                      >
                        <p
                          style={{
                            marginRight: "24px",
                          }}
                          className="p1"
                        >
                          Notes
                        </p>
                      </NavLink>

                      <NavLink
                        activeStyle={{
                          textDecoration: "underline",
                          textDecorationColor: "var(--primary-color)",
                          color: "var(--main-black)",
                          fontWeight: "700",
                          textDecorationThickness: "2px",
                        }}
                        to={{
                          pathname: `/studySet/flashcards/${
                            folderBlocks[location.state.folderIndex].binders[
                              location.state.binderIndex
                            ].studySets[location.state.studySetIndex].id
                          }`,
                          state: {
                            name: location.state.name,
                            type: location.state.type,
                            folderIndex: location.state.folderIndex,
                            binderIndex: location.state.binderIndex,
                            studySetIndex: location.state.studySetIndex,
                            tab: "flashcards",
                          },
                        }}
                      >
                        <p className="p1">Flashcards</p>
                      </NavLink>
                    </>
                  ) : null}
                </div>
              </div>
              <div className="dekked-page-title">
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
            </div>
          </div>

          <div className="dekked-page-content-container">
            <div className="dekked-page-content">
              {location.state.tab === "notes" ? (
                <StudySetNotes
                  handleFolderBlocks={handleFolderBlocks}
                  folderBlocks={folderBlocks}
                />
              ) : (
                <StudySetFlashcards
                  handleFolderBlocks={handleFolderBlocks}
                  folderBlocks={folderBlocks}
                />
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default StudySet;
