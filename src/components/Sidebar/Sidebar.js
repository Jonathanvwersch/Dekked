import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./Sidebar.css";
import { Icon } from "@iconify/react";
import chevronDoubleLeft from "@iconify/icons-mdi/chevron-double-left";
import { FolderData, BinderData, StudySetData } from "./DropBlockMenuData";
import { ProfileData } from "./ProfileData";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

import Portal from "../General/Portal";
import Block from "../General/Block";
import Settings from "../Settings/Settings";

function Sidebar({
  sidebar,
  handleSidebar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
}) {
  const [profileMenu, setProfileMenu] = useState(false);
  const [settingsPage, setSettingsPage] = useState(false);

  const addFolder = () => {
    const newFolder = {
      name: "",
      type: "folder",
      id: Math.random(),
      iconColour: "#2C2C31",
      isOpen: false,
      binders: [],
    };
    handleFolderBlocks((folderBlocks) => [...folderBlocks, newFolder]);
  };

  const openFolderBlock = (folderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice(); //make copy of array of folder blocks
    newFolderBlocksArray[folderIndex].isOpen = !newFolderBlocksArray[
      folderIndex
    ].isOpen; // Invert folder block's open status
    handleFolderBlocks(newFolderBlocksArray);
  };

  const addBinder = (folderIndex) => {
    const newBinder = {
      name: "",
      type: "binder",
      id: Math.random(),
      iconColour: "#2C2C31",
      isOpen: false,
      studySets: [],
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].isOpen = true;
    newFolderBlocksArray[folderIndex].binders.push(newBinder);
    handleFolderBlocks(newFolderBlocksArray);
  };

  const openBinderBlock = (folderIndex, binderIndex) => {
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[
      binderIndex
    ].isOpen = !newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen;
    handleFolderBlocks(newFolderBlocksArray);
  };

  const addStudySet = (folderIndex, binderIndex) => {
    const newStudySet = {
      name: "",
      type: "studySet",
      id: Math.random(),
      iconColour: "#2C2C31",
      tab: "notes"
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    handleFolderBlocks(newFolderBlocksArray);
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
    handleFolderBlocks(array);
    if (folderBlocks.length === 1) addFolder();
  };

  const handleSettings = () => {
    setSettingsPage((prevState) => !prevState);
  };

  const handleIconColour = (
    type,
    folderIndex,
    binderIndex,
    studySetIndex,
    iconColour
  ) => {
    const newFolderBlocksArray = folderBlocks.slice();
    if (type === "folder") {
      newFolderBlocksArray[folderIndex].iconColour = iconColour;
    } else if (type === "binder") {
      newFolderBlocksArray[folderIndex].binders[
        binderIndex
      ].iconColour = iconColour;
    } else if (type === "studySet") {
      newFolderBlocksArray[folderIndex].binders[binderIndex].studySets[
        studySetIndex
      ].iconColour = iconColour;
    }
    handleFolderBlocks(newFolderBlocksArray);
  };

  return (
    <>
      {sidebar ? (
        <div className="dekked-sidebar-container">
          <div className="dekked-sidebar">
            <div className="sidebar-top">
              <div className="profile">
                <div className="avatar">
                  <p className="p1">J</p>
                </div>
                <p className="p3">Jane Doe</p>
                <div
                  className="icon active dropDownArrow down"
                  onClick={() => setProfileMenu((prevState) => !prevState)}
                >
                  <Icons.MdArrowDropDown />
                </div>
                {profileMenu ? (
                  <Portal
                    state={profileMenu}
                    handleState={() =>
                      setProfileMenu((prevState) => !prevState)
                    }
                  >
                    <div
                      className="dropdownMenu settingsMenu"
                      onClick={() => setProfileMenu((prevState) => !prevState)}
                    >
                      {ProfileData.map((item, index) => {
                        return (
                          <Block
                            item={item}
                            key={`${item} Block ${index}`}
                            handleSettings={handleSettings}
                          />
                        );
                      })}
                    </div>
                  </Portal>
                ) : null}
                {settingsPage ? (
                  <Portal
                    state={settingsPage}
                    handleState={handleSettings}
                    lightbox={true}
                    center={true}
                    close={true}
                  >
                    <Settings handleState={handleSettings} />
                  </Portal>
                ) : null}
              </div>
              <div
                className="icon active chevronDoubleLeft"
                onClick={handleSidebar}
              >
                <Icon icon={chevronDoubleLeft} />
              </div>
            </div>
            <div className="workspace">
              <div className="title">
                <p className="p2">Workspace</p>
              </div>
              <div className="folderBlocks">
                {folderBlocks.map((folder, folderIndex) => (
                  <div key={folder.id} className="folderBlock">
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
                        handleDelete={() => deleteBlock(folder.id, folder.type)}
                        handleAddItem={() => addBinder(folderIndex)}
                        isExpanded={() => openFolderBlock(folderIndex)}
                        isOpen={folder.isOpen}
                        dropBlockMenuData={FolderData}
                        handleNameChange={handleNameChange}
                        handleIconColour={handleIconColour}
                        folderBlocks={folderBlocks}
                      />
                    </NavLink>
                    {folder.isOpen ? (
                      folder.binders.length === 0 ? (
                        <div className="noBinders">
                          <p className="p2">No binders inside</p>
                        </div>
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
                                    binder.id,
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
                                  openBinderBlock(folderIndex, binderIndex)
                                }
                                isOpen={binder.isOpen}
                                handleNameChange={handleNameChange}
                                dropBlockMenuData={BinderData}
                                handleIconColour={handleIconColour}
                                folderBlocks={folderBlocks}
                              />
                            </NavLink>
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
                                            tab: studySet.tab
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
                                              studySet.id,
                                              studySet.type,
                                              folderIndex,
                                              binderIndex,
                                              studySetIndex
                                            )
                                          }
                                          dropBlockMenuData={StudySetData}
                                          handleNameChange={handleNameChange}
                                          handleIconColour={handleIconColour}
                                          folderBlocks={folderBlocks}
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
            <div onClick={addFolder} className="sidebar-bottom">
              <div className="addBlock">
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
      ) : null}
    </>
  );
}

export default withRouter(Sidebar);
