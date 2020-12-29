import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router";

function StudySetNotes({ folderBlocks, handleFolderBlocks }) {
  let location = useLocation();

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

  return <></>;
}

export default StudySetNotes;
