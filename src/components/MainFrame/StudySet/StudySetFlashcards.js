import "./StudySetFlashcards.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Flashcard from "./Flashcard";

function StudySetFlashcards({
  folderBlocks,
  handleFolderBlocks,
  deleteFlashcard,
}) {
  let location = useLocation();

  const handleTab = () => {
    const newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].tab = "flashcards"; // Invert folder block's open status
    handleFolderBlocks(newFolderBlocksArray);
  };
  useEffect(() => {
    handleTab();
  }, [location.state]);
  return (
    <>
      {location.state
        ? folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].flashcards.map(
            (item, index) => (
              <Flashcard
                deleteFlashcard={() => {
                  deleteFlashcard(index);
                }}
                index={index}
              />
            )
          )
        : null}
    </>
  );
}

export default StudySetFlashcards;
