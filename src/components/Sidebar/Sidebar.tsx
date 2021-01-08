import React, { useEffect, useRef } from "react";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop/SidebarTop";
import SidebarBottom from "./SidebarBottom/SidebarBottom";
import { useMousePosition } from "../../custom-hooks/useMousePosition";
import { SidebarWorkspace } from "./SidebarWorkspace/SidebarWorkspace";

interface Props {
  sidebar: boolean;
  hoverbar: boolean;
  setHoverbar: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebar: () => void;
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
    binderIndex?: number,
    studySetIndex?: number
  ) => void;
  addFolder: () => void;
  addBinder: (folderIndex: number) => void;
  addStudySet: (folderIndex: number, binderIndex: number) => void;
  deleteBlock: (
    type: string,
    folderIndex: number,
    binderIndex?: any,
    studySetIndex?: any
  ) => void;
  deleteForever: (index: number) => void;
  handleRestore: (type: string, deletedItemIndex: number) => void;
  deletedItems: Array<any>;
}

const Sidebar: React.FC<Props> = ({
  sidebar,
  hoverbar,
  setHoverbar,
  handleSidebar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
  addFolder,
  addBinder,
  addStudySet,
  deleteBlock,
  deleteForever,
  handleRestore,
  deletedItems,
}) => {
  const mousePosition = useMousePosition();
  const sidebarRef = useRef<any>(null);

  useEffect(() => {
    if (document.getElementById("portal-overlay") && hoverbar)
      setHoverbar(true);
    else {
      if (!sidebar && mousePosition.x < 20 && !hoverbar) setHoverbar(true);
      else if (hoverbar && mousePosition.x > sidebarRef.current.offsetWidth)
        setHoverbar(false);
    }
  }, [mousePosition, sidebar, hoverbar, setHoverbar, sidebarRef]);

  const hoverStyleContainer = {
    position: "fixed",
    top: "10vh",
    maxHeight: "calc(100vh - 140px)",
  } as React.CSSProperties;

  const hoverStyleSidebar = {
    filter: "var(--drop-shadow)",
    borderRadius: "2px 0px 2px",
    maxHeight: "calc(100vh - 140px)",
  } as React.CSSProperties;

  return (
    <>
      {sidebar || hoverbar ? (
        <div
          className="dekked-sidebarContainer"
          style={hoverbar ? hoverStyleContainer : null}
        >
          <div
            className="dekked-sidebar"
            style={hoverbar ? hoverStyleSidebar : null}
            ref={sidebarRef}
          >
            <SidebarTop hoverbar={hoverbar} handleSidebar={handleSidebar} />
            <SidebarWorkspace
              addBinder={addBinder}
              addFolder={addFolder}
              addStudySet={addStudySet}
              deleteBlock={deleteBlock}
              folderBlocks={folderBlocks}
              handleFolderBlocks={handleFolderBlocks}
              handleNameChange={handleNameChange}
            />
            <SidebarBottom
              deleteForever={deleteForever}
              handleRestore={handleRestore}
              deletedItems={deletedItems}
              addFolder={addFolder}
              hoverbar={hoverbar}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
