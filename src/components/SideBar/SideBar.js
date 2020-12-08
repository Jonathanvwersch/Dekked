import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./SideBar.css";
import { ReactComponent as ChevronDoubleLeftIcon } from "../../custom-icons/chevronDoubleLeft.svg";
import { FolderData, BinderData, StudySetData } from "./DropdownMenuData";

function NavBar() {
  const [folderBlocks, setFolderBlocks] = useState([]);

  const addFolder = () => {
    const newFolder = {
      type: "folder",
      id: Math.random(),
      binders: [],
      isOpen: false,
    };
    setFolderBlocks((folderBlocks) => [...folderBlocks, newFolder]);
  };

  const openFolderBlock = (folderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[
      folderIndex
    ].isOpen;
    setFolderBlocks(newFolderBlocksArray);
  };

  const addBinder = (folderIndex) => {
    const newBinder = {
      type: "binder",
      id: Math.random(),
      studySets: [],
      isOpen: false,
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].isOpen = true;
    newFolderBlocksArray[folderIndex].binders.push(newBinder);
    setFolderBlocks(newFolderBlocksArray);
  };

  const openBinderBlock = (folderIndex, binderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[
      binderIndex
    ].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
    setFolderBlocks(newFolderBlocksArray);
  };

  const addStudySet = (folderIndex, binderIndex) => {
    const newStudySet = {
      type: "studySet",
      id: Math.random(),
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    setFolderBlocks(newFolderBlocksArray);
  };

  const deleteBlock = (id, type, folderIndex, binderIndex, studySetIndex) => {
    let array;
    if (type === "folder")
      array = folderBlocks.filter((folderBlock) => folderBlock.id !== id);
    else if (type === "binder") {
      array = folderBlocks.slice();
      array[folderIndex].binders.splice(binderIndex, 1);
    } else if (type === "studySet") {
      array = folderBlocks.slice();
      array[folderIndex].binders[binderIndex].studySets.splice(
        studySetIndex,
        1
      );
    }

    setFolderBlocks(array);
  };

  return (
    <>
      <div className="dekked-sidebar-container">
        <div style={{ height: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              bottom: "0px",
              display: "flex",
              flexDirection: "column",
              width: "0px",
              overflow: "visible",
              zIndex: "9",
              pointerEvents: "none",
            }}
          >
            <div className="dekked-sidebar">
              <div className="sidebar-top">
                <div className="profile">
                  <div className="avatar">
                    <p className="p1">J</p>
                  </div>
                  <p className="p3">Jane Doe</p>
                  <div className="icon dropDownArrow down">
                    <Icons.MdArrowDropDown />
                  </div>
                </div>
                <div className="icon chevronDoubleLeft">
                  <ChevronDoubleLeftIcon />
                </div>
              </div>
              <div className="workspace">
                <div className="title">
                  <p className="p2">Workspace</p>
                </div>
                <div className="folderBlocks">
                  {folderBlocks.map((folder, folderIndex) => (
                    <div key={folder.id} className="folderBlock">
                      <DropBlock
                        type={folder.type}
                        key={folder.id}
                        id={folder.id}
                        handleDelete={() => deleteBlock(folder.id, folder.type)}
                        handleAddItem={() => addBinder(folderIndex)}
                        isExpanded={() => openFolderBlock(folderIndex)}
                        dropdownMenudata={FolderData}
                      />
                      {folder.isOpen ? (
                        folder.binders.length === 0 ? (
                          <div className="noBinders">
                            <p className="p2">No binders inside</p>
                          </div>
                        ) : (
                          folder.binders.map((binder, binderIndex) => (
                            <div key={binder.id} className="binderBlock">
                              <DropBlock
                                type={binder.type}
                                key={binder.id}
                                id={binder.id}
                                handleDelete={() =>
                                  deleteBlock(
                                    binder.id,
                                    binder.type,
                                    folderIndex,
                                    binderIndex
                                  )
                                }
                                folderIndex={folderIndex}
                                handleAddItem={() =>
                                  addStudySet(folderIndex, binderIndex)
                                }
                                isExpanded={() =>
                                  openBinderBlock(folderIndex, binderIndex)
                                }
                                dropdownMenudata={BinderData}
                              />
                              {binder.isOpen ? (
                                binder.studySets.length === 0 ? (
                                  <div className="noStudySets">
                                    <p className="p2">No study sets inside</p>
                                  </div>
                                ) : (
                                  binder.studySets.map(
                                    (studySet, studySetIndex) => (
                                      <div
                                        key={studySet.id}
                                        className="studySetBlock"
                                      >
                                        <DropBlock
                                          type={studySet.type}
                                          key={studySet.id}
                                          id={studySet.id}
                                          handleDelete={() =>
                                            deleteBlock(
                                              studySet.id,
                                              studySet.type,
                                              folderIndex,
                                              binderIndex,
                                              studySetIndex
                                            )
                                          }
                                          dropdownMenudata={StudySetData}
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
              <div className="sidebar-bottom">
                <div onClick={addFolder} className="AddBlock">
                  <div className="icon plus">
                    <Icons.MdAdd />
                  </div>
                  <div className="addFolder">
                    <p className="p1">Add folder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
