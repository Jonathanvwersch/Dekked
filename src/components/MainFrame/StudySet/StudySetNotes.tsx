import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router";

interface Props {
  folderBlocks:any;
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
}

const StudySetNotes:React.FC<Props> = ({ folderBlocks, handleFolderBlocks }) => {
  let location = useLocation<any>();

  const handleTab = useCallback(() => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].tab = "flashcards";
    handleFolderBlocks(newFolderBlocksArray);
  },[location, folderBlocks, handleFolderBlocks]);

  useEffect(() => {
    handleTab();
  }, [handleTab]);

  return <></>;
}

export default StudySetNotes;
