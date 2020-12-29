import React from "react";
import { NavLink } from "react-router-dom";
import { FolderData, BinderData, StudySetData } from "./DropBlockMenuData";
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
  const openBlock = (type, folderIndex, binderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder")
      newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[
        folderIndex
      ].isOpen;
    else
      newFolderBlocksArray[folderIndex].binders[
        binderIndex
      ].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <>
      {sidebar ? (
        <div className="dekked-sidebarContainer">
          <div className="dekked-sidebar">
            <SidebarTop handleSidebar={handleSidebar} />
            <div className="workspace">
              <p className="p2 title">Workspace</p>
              <div className="folderBlocks">
                {folderBlocks.map((folder, folderIndex) => (
                  <div key={folder.id} className="folderBlock">
                    <>
                      <NavLink
                        activeStyle={{
                          background: "var(--off-beige-clicked)",
                          fontWeight: "700",
                        }}
                        to={{
                          pathname: `/${folder.type}/${folder.id}`,
                          state: {
                            type: folder.type,
                            name: folder.name,
                            folderIndex: folderIndex,
                          },
                        }}
                      >
                        <DropBlock
                          name={folder.name}
                          type={folder.type}
                          folderIndex={folderIndex}
                          key={folder.id}
                          id={folder.id}
                          handleDelete={() =>
                            deleteBlock(folder.type, folderIndex)
                          }
                          handleAddItem={() => addBinder(folderIndex)}
                          isExpanded={() => openBlock(folder.type, folderIndex)}
                          isOpen={folder.isOpen}
                          dropBlockMenuData={FolderData}
                          handleNameChange={handleNameChange}
                          folderBlocks={folderBlocks}
                          handleFolderBlocks={handleFolderBlocks}
                        />
                      </NavLink>
                    </>
                    {folder.isOpen ? (
                      folder.binders.length === 0 ? (
                        <p className="p2 noBinders">No binders inside</p>
                      ) : (
                        folder.binders.map((binder, binderIndex) => (
                          <div key={binder.id} className="binderBlock">
                            <NavLink
                              activeStyle={{
                                background: "var(--off-beige-clicked)",
                                fontWeight: "700",
                              }}
                              to={{
                                pathname: `/${binder.type}/${binder.id}`,
                                state: {
                                  type: binder.type,
                                  name: binder.name,
                                  folderIndex: folderIndex,
                                  binderIndex: binderIndex,
                                },
                              }}
                            >
                              <DropBlock
                                name={binder.name}
                                type={binder.type}
                                key={binder.id}
                                id={binder.id}
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
                                isExpanded={() =>
                                  openBlock(
                                    binder.type,
                                    folderIndex,
                                    binderIndex
                                  )
                                }
                                isOpen={binder.isOpen}
                                handleNameChange={handleNameChange}
                                dropBlockMenuData={BinderData}
                                folderBlocks={folderBlocks}
                                handleFolderBlocks={handleFolderBlocks}
                              />
                            </NavLink>
                            {binder.isOpen ? (
                              binder.studySets.length === 0 ? (
                                <p className="p2 noStudySets">
                                  No study sets inside
                                </p>
                              ) : (
                                binder.studySets.map(
                                  (studySet, studySetIndex) => (
                                    <div
                                      key={studySet.id}
                                      className="studySetBlock"
                                    >
                                      <NavLink
                                        activeStyle={{
                                          background:
                                            "var(--off-beige-clicked)",
                                          fontWeight: "700",
                                        }}
                                        to={{
                                          pathname: `/${studySet.type}/${studySet.tab}/${studySet.id}`,
                                          state: {
                                            type: studySet.type,
                                            name: studySet.name,
                                            folderIndex: folderIndex,
                                            binderIndex: binderIndex,
                                            studySetIndex: studySetIndex,
                                            tab: studySet.tab,
                                          },
                                        }}
                                      >
                                        <DropBlock
                                          name={studySet.name}
                                          type={studySet.type}
                                          key={studySet.id}
                                          id={studySet.id}
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
                                          dropBlockMenuData={StudySetData}
                                          handleNameChange={handleNameChange}
                                          folderBlocks={folderBlocks}
                                          handleFolderBlocks={handleFolderBlocks}
                                        />
                                      </NavLink>
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
