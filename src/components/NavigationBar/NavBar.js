import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./NavBar.css";
import { ReactComponent as ChevronDoubleLeftIcon } from "../../custom-icons/chevronDoubleLeft.svg";
import { FolderData, BinderData, StudySetData } from "./DropdownMenuData";

function NavBar() {
  const [folderBlocks, setFolderBlocks] = useState([]);

  const addFolder = () => {
    const newFolder = {
      type: "folder",
      id: Math.random(),
      binders: [],
    };
    setFolderBlocks((folderBlocks) => [...folderBlocks, newFolder]);
  };

  const addBinder = (folderIndex) => {
    const newBinder = {
      type: "binder",
      id: Math.random(),
      studySets: [],
    };

    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders.push(newBinder);
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
    setFolderBlocks(newFolderBlocksArray);
  };

  const deleteBlock = (id, type, folderIndex, binderIndex) => {
    let array = folderBlocks.filter((folderBlock) => folderBlock.id !== id);
    if (type === "binder") {
      return;
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
                        dropdownMenudata={FolderData}

                      />
                      <div></div>
                      {folder.binders.map((binder, binderIndex) => (
                        <div key={binder.id} className="binderBlock">
                          <DropBlock
                            type={binder.type}
                            key={binder.id}
                            id={binder.id}
                            handleAddItem={() =>
                              addStudySet(folderIndex, binderIndex)
                            }
                            dropdownMenudata={BinderData}
                          />
                          {binder.studySets.map((studySet, studySetIndex) => (
                            <div key={studySet.id} className="studySetBlock">
                              <DropBlock
                                type={studySet.type}
                                key={studySet.id}
                                id={studySet.id}
                                dropdownMenudata={StudySetData}
                              />
                            </div>
                          ))}
                        </div>
                      ))}
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
