import "./StudySetFlashcards.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router";

function StudySetFlashcards({ folderBlocks, handleFolderBlocks }) {
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
    console.log(location.state);
  }, [location.state]);
  return null;
}

export default StudySetFlashcards;
