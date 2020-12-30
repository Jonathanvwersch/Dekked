import React, { useEffect } from "react";
import DropBlock from "./DropBlock";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";
import { useMousePosition } from "../../custom-hooks/UseMousePosition";
import { useHover } from "../../custom-hooks/useHover";

function Sidebar({
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
}) {
  const mousePosition = useMousePosition();
  const [hoverRef, isHovered] = useHover();

  useEffect(() => {
    if (!sidebar && mousePosition.x < 20 && !hoverbar) setHoverbar(true);
    else if (hoverbar && !isHovered && mousePosition.x > 220)
      setHoverbar(false);
  }, [isHovered, mousePosition]);

  const hoverStyleContainer = {
    position: "fixed",
  };

  const hoverStyleSidebar = {
    filter: "var(--drop-shadow)",
    borderRadius: "2px 0px 2px",
    height: "calc(100vh - 140px)",
  };

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
          >
            <SidebarTop
              hoverbar={hoverbar}
              handleSidebar={handleSidebar}
              ref={hoverRef}
            />
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
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
