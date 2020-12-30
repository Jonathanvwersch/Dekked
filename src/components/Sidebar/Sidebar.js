import React from "react";
import { NavLink } from "react-router-dom";
import DropBlock from "./DropBlock";
import "./Sidebar.css";
import SidebarTop from "./SidebarTop";
import SidebarBottom from "./SidebarBottom";

function Sidebar({
  sidebar,
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
  return (
    <>
      {sidebar ? (
        <div className="dekked-sidebar">
          <SidebarTop handleSidebar={handleSidebar} />
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
                      handleDelete={() => deleteBlock(folder.type, folderIndex)}
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
                              deleteBlock(binder.type, folderIndex, binderIndex)
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
      ) : null}
    </>
  );
}

export default Sidebar;
