import "./StudySet.css";
import React, { useEffect, useRef, useState } from "react";
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
  sidebar,
}) {
  let location = useLocation();
  const titleRef = useRef();

  const [flashcards, setFlashcards] = useState([]);

  const handleFlashcards = (newFlashcardsArray) => {
    setFlashcards(newFlashcardsArray);
  };

  const addFlashcard = () => {
    const newFlashcard = {
      id: uuidv4(),
    };
    let flashcardsArray = flashcards.slice();
    flashcardsArray.unshift(newFlashcard);
    handleFlashcards(flashcardsArray);
    console.log(flashcards);
  };

  const deleteFlashcard = (index) => {
    let flashcardsArray = flashcards.slice();
    flashcardsArray.splice(index, 1);
    setFlashcards(flashcardsArray);
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
    <div className="dekked-studySet">
      {location.state ? (
        <>
          <div className="dekked-pageHeaderContainer">
            <div className="dekked-pageHeader">
              <div className="toolbarTab">
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
              <div className="dekked-studySetPageTitle">
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
              {location.state.tab === "flashcards" ? (
                <div className="buttonQuantity">
                  <p
                    className="p2"
                    style={{ color: "var(--grey-2)", userSelect: "none" }}
                  >
                    {`${flashcards.length} Flashcard(s)`}
                  </p>
                  <div className="dekked-studySetPageButtons">
                    <div style={{ marginRight: "32px" }}>
                      <Button
                        handleClick={addFlashcard}
                        type="secondary"
                        action="Add flashcard"
                      />
                    </div>
                    <Button type="primary" action="Study" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="dekked-pageContentContainer">
            <div className="dekked-pageContent">
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
                  flashcards={flashcards}
                  handleFlashcards={handleFlashcards}
                  deleteFlashcard={deleteFlashcard}
                />
              )}
            </div>
            {location.state.tab === "notes" ? (
              <div className="linkedFlashcard">
                <LinkedFlashcard sidebar={sidebar} />
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default StudySet;
