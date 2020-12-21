import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import "./StudySetNotes.css";

function StudySetNotes({ folderBlocks, handleFolderBlocks }) {
  let location = useLocation();
  console.log(location);

  const handleTab = () => {
    const newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].tab = "notes"; // Invert folder block's open status
    handleFolderBlocks(newFolderBlocksArray);
  };
  useEffect(() => {
    handleTab();
  }, [location.state]);

  return null;
}

export default StudySetNotes;
