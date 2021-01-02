import "./StudySet.css";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import Toolbar from "../StudySet/Toolbar";
import { NavLink } from "react-router-dom";
import StudySetNotes from "./StudySetNotes";
import StudySetFlashcards from "./StudySetFlashcards";
import Button from "../../Buttons/Button";
import LinkedFlashcard from "./LinkedFlashcard";
import { v4 as uuidv4 } from "uuid";

function StudySet({
  folderBlocks,
  handleNameChange,
  handleFolderBlocks,
}) {
  let location = useLocation();
  const titleRef = useRef();

  const addFlashcard = () => {
    const newFlashcard = {
      id: uuidv4(),
      type: "",
      studySetId:
        folderBlocks[location.state.folderIndex].binders[
          location.state.binderIndex
        ].studySets[location.state.studySetIndex].id,
      binderId:
        folderBlocks[location.state.folderIndex].binders[
          location.state.binderIndex
        ].id,
      folderId: folderBlocks[location.state.folderIndex].id,
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].flashcards.unshift(newFlashcard);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const deleteFlashcard = (index) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].flashcards.splice(index, 1);
    handleFolderBlocks(newFolderBlocksArray);
  };

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
      {location.state ? (
        <>
          <div className="dekked-pageHeaderContainer studySet">
            <div className="dekked-pageHeader">
              <div id="toolbarTab">
                {location.state && location.state.tab === "notes" ? (
                  <Toolbar type="full" />
                ) : (
                  <div></div>
                )}
                <div id="studySetSwitcher">
                  {location.state ? (
                    <>
                      <NavLink
                        activeStyle={{
                          textDecoration: "underline",
                          textDecorationColor: "var(--primary-color)",
                          color: "var(--main-black)!important",
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
                        <span className="p1">Notes</span>
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
                        <span className="p1">Flashcards</span>
                      </NavLink>
                    </>
                  ) : null}
                </div>
              </div>
              <h2
                contentEditable={true}
                onDragOver={(e) => {
                  e.preventDefault();
                }}
                onPaste={(e)=>{e.preventDefault();return false;}}
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
              {location.state.tab === "flashcards" ? (
                <div className="buttonQuantity studySet">
                  <span
                    className="p2"
                    style={{ color: "var(--grey-2)", userSelect: "none" }}
                  >
                    {`${
                      folderBlocks[location.state.folderIndex].binders[
                        location.state.binderIndex
                      ].studySets[location.state.studySetIndex].flashcards
                        .length
                    } Flashcard(s)`}
                  </span>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "32px" }}>
                      <Button
                        handleClick={addFlashcard}
                        type="secondary"
                        action="Add flashcard"
                      />
                    </div>
                    <Button disabled type="primary" action="Study" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="dekked-pageContentContainer">
            <div className="dekked-pageContent studySet">
              {location.state.tab === "notes" ? (
                <>
                  <StudySetNotes
                    handleFolderBlocks={handleFolderBlocks}
                    folderBlocks={folderBlocks}
                  />
                </>
              ) : (
                <StudySetFlashcards
                  handleFolderBlocks={handleFolderBlocks}
                  folderBlocks={folderBlocks}
                  deleteFlashcard={deleteFlashcard}
                />
              )}
            </div>
            {location.state.tab === "notes" ? (
              <div id="linkedFlashcardContainer">
                <LinkedFlashcard />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}

export default StudySet;
