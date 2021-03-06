import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Flashcard from "../Flashcard/Flashcard";
import { v4 as uuidv4 } from "uuid";
import "./StudySetFlashcards.css";

interface Props {
  folderBlocks: {
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
        binderId: string;
        folderId: string;
        iconColour: string;
        tab: string;
        flashcards: {
          id: string;
          type: string;
          front: string;
          back: string;
          studySetId: string;
          binderId: string;
          folderId: string;
        }[];
      }[];
    }[];
  }[];
  handleFolderBlocks: (newFolderBlocksArray: any) => void;
  deleteFlashcard: (index: number) => void;
}

const StudySetFlashcards: React.FC<Props> = ({
  folderBlocks,
  handleFolderBlocks,
  deleteFlashcard,
}) => {
  let location = useLocation<any>();

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
    <div className="studySetFlashcards">
      {location.state
        ? folderBlocks[location.state.folderIndex].binders[
            location.state.binderIndex
          ].studySets[location.state.studySetIndex].flashcards.map(
            (item: any, index: number) => (
              <Flashcard
                deleteFlashcard={() => {
                  deleteFlashcard(index);
                }}
                index={index + 1}
                key={uuidv4()}
              />
            )
          )
        : null}
    </div>
  );
};

export default StudySetFlashcards;
