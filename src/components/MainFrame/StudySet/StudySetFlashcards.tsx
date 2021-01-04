import React, { useEffect, useCallback } from "react";
import { useLocation } from "react-router";
import Flashcard from "./Flashcard";

interface Props {
  folderBlocks:{
    name: string;
    type: string;
    id: string;
    iconColour: string;
    isOpen: boolean;
    binders: {
        name: string;
        type: string;
        id: string;
        folderId: string;
        iconColour: string;
        isOpen: boolean;
        studySets: {
            name: string;
            type: string;
            id: string;
            binderId:string;
            folderId:string;
            iconColour:string;
            tab:string;
            flashcards: {
              id:string;
              type:string;
              front:string;
              back:string;
              studySetId:string;
              binderId:string;
              folderId:string;
            }[];
        }[];
    }[];
  }[]
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
  deleteFlashcard: (index:number) => void;
}

const StudySetFlashcards: React.FC<Props> = ({
  folderBlocks,
  handleFolderBlocks,
  deleteFlashcard,
}) => {
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

  return (
    <>
      {location.state
        ? folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].flashcards.map(
            (item:any, index:number) => (
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
