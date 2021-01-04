import React, { useEffect, useRef } from "react";
import DropBlock from "./DropBlock";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import { useMousePosition } from "../../custom-hooks/useMousePosition";

interface Props {
  sidebar:boolean;
  hoverbar:boolean;
  setHoverbar: React.Dispatch<React.SetStateAction<boolean>>;
  handleSidebar: () => void;
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
            flashcards:{
              type: string;
              id: string;
              front:string;
              back:string;
              studySetId:string
              binderId:string;
              folderId:string;
            }[];
        }[];
    }[];
  }[];
  handleFolderBlocks: (newFolderBlocksArray:any) => void;
  handleNameChange:(type:string, folderIndex:number, blockName:string, binderIndex?:number, studySetIndex?:number) => void;
  addFolder: () => void;
  addBinder: (folderIndex: number) => void;
  addStudySet: (folderIndex: number, binderIndex: number) => void;
  deleteBlock: (type:string, folderIndex:number, binderIndex?:any, studySetIndex?:any) => void;
  deleteForever: (index:number) => void;
  handleRestore: (type:string, deletedItemIndex:number) => void;
  deletedItems: Array<any>;
}

const Sidebar:React.FC<Props> = ({
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
      else if (hoverbar && mousePosition.x > sidebarRef.current.offsetWidth) setHoverbar(false);
    }
  }, [mousePosition, sidebar, hoverbar, setHoverbar, sidebarRef]);

  const hoverStyleContainer = {
    position: "fixed",
  } as React.CSSProperties;

  const hoverStyleSidebar = {
    filter: "var(--drop-shadow)",
    borderRadius: "2px 0px 2px",
    height: "calc(100vh - 140px)",
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
            <div className="workspace">
              <span className="p2 grey title">Workspace</span>
              <div className="folderBlocks">
                {folderBlocks.map((folder, folderIndex) => (
                  <div key={folder.id} className="folderBlock">
                    <>
                      <DropBlock
                        item={folder}
                        folderIndex={folderIndex}
                        key={folder.id}
                        handleDelete={() =>
                          deleteBlock(folder.type, folderIndex)
                        }
                        handleAddItem={() => addBinder(folderIndex)}
                        handleNameChange={handleNameChange}
                        folderBlocks={folderBlocks}
                        handleFolderBlocks={handleFolderBlocks}
                      />
                    </>
                    {folder.isOpen ? (
                      folder.binders.length === 0 ? (
                        <span className="p2 noBinders">No binders inside</span>
                      ) : (
                        folder.binders.map((binder, binderIndex) => (
                          <div key={binder.id} className="binderBlock">
                            <DropBlock
                              item={binder}
                              key={binder.id}
                              handleDelete={() =>
                                deleteBlock(
                                  binder.type,
                                  folderIndex,
                                  binderIndex
                                )
                              }
                              folderIndex={folderIndex}
                              binderIndex={binderIndex}
                              handleAddItem={() =>
                                addStudySet(folderIndex, binderIndex)
                              }
                              handleNameChange={handleNameChange}
                              folderBlocks={folderBlocks}
                              handleFolderBlocks={handleFolderBlocks}
                            />

                            {binder.isOpen ? (
                              binder.studySets.length === 0 ? (
                                <span className="p2 noStudySets">
                                  No study sets inside
                                </span>
                              ) : (
                                binder.studySets.map(
                                  (studySet, studySetIndex) => (
                                    <div
                                      key={studySet.id}
                                      className="studySetBlock"
                                    >
                                      <DropBlock
                                        item={studySet}
                                        key={studySet.id}
                                        folderIndex={folderIndex}
                                        binderIndex={binderIndex}
                                        studySetIndex={studySetIndex}
                                        handleDelete={() =>
                                          deleteBlock(
                                            studySet.type,
                                            folderIndex,
                                            binderIndex,
                                            studySetIndex
                                          )
                                        }
                                        handleNameChange={handleNameChange}
                                        folderBlocks={folderBlocks}
                                        handleFolderBlocks={handleFolderBlocks}
                                      />
                                    </div>
                                  )
                                )
                              )
                            ) : null}
                          </div>
                        ))
                      )
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
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
}

export default Sidebar;
