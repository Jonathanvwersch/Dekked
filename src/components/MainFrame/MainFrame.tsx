import React, {useEffect} from "react";
import TopBar from "./TopBar/TopBar";
import { useLocation } from "react-router";
import "./MainFrame.css";
import FolderBinder from "./FolderBinder/FolderBinder";
import StudySet from "./StudySet/StudySet";

interface Props {
  sidebar: boolean;
  handleSidebar: () => void;
  setHoverbar: React.Dispatch<React.SetStateAction<boolean>>;
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
          type: string;
          id: string;
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
  handleNameChange: (
    type: string,
    folderIndex: number,
    blockName: string,
    binderIndex: any,
    studySetIndex: any
  ) => void;
  addBinder: (folderIndex: number) => void;
  addStudySet: (folderIndex: number, binderIndex: number) => void;
}

const MainFrame: React.FC<Props> = ({
  sidebar,
  handleSidebar,
  setHoverbar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
  addBinder,
  addStudySet,
}) => {
  let location = useLocation();

  useEffect(() => {
    if (location.state)
      document.title = location.state.item.name ? location.state.item.name : "Untitled";
  }, [location.state])
  
  
  return (
    <>
      <div className="dekked-frameContainer">
        <TopBar
          folderBlocks={folderBlocks}
          sidebar={sidebar}
          handleSidebar={handleSidebar}
          setHoverbar={setHoverbar}
        />
        <div className="dekked-frame">
          {location.state ? (
            location.state.item.type === "folder" ||
            location.state.item.type === "binder" ? (
              <FolderBinder
                folderBlocks={folderBlocks}
                handleNameChange={handleNameChange}
                addBinder={addBinder}
                addStudySet={addStudySet}
              />
            ) : (
              <StudySet
                folderBlocks={folderBlocks}
                handleNameChange={handleNameChange}
                handleFolderBlocks={handleFolderBlocks}
                sidebar={sidebar}
              />
            )
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MainFrame;
