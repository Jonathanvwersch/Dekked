import React, { useEffect } from "react";
import { useLocation } from "react-router";

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
}

const StudySetNotes:React.FC<Props> = ({ folderBlocks, handleFolderBlocks }) => {
  let location = useLocation<any>();

  const handleTab = () => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[location.state.folderIndex].binders[
      location.state.binderIndex
    ].studySets[location.state.studySetIndex].tab = "notes";
    handleFolderBlocks(newFolderBlocksArray);
  };

  useEffect(() => {
    handleTab();
  }, [folderBlocks]);

  return <></>;
}

export default StudySetNotes;
