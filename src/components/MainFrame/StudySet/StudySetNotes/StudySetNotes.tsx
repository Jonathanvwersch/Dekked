import React, { useLayoutEffect, useEffect, useRef } from "react";
import { useLocation } from "react-router";
import "./StudySetNotes.css";
import { useResize } from "../../../../custom-hooks/UseResize";
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
  setStudySetNotesWidth: any;
  sidebar: boolean;
}

const StudySetNotes: React.FC<Props> = ({
  folderBlocks,
  handleFolderBlocks,
  setStudySetNotesWidth,
  sidebar,
}) => {
  let location = useLocation<any>();
  const ref = useRef<any>(null);
  const { width } = useResize(ref, sidebar);

  useLayoutEffect(() => {
    setStudySetNotesWidth(width);
  }, [width, setStudySetNotesWidth]);

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

  return (
    <>
      <div className="studySetNotes" ref={ref}></div>
    </>
  );
};

export default StudySetNotes;
