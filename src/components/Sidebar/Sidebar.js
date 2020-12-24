import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./Sidebar.css";
import { Icon } from "@iconify/react";
import chevronDoubleLeft from "@iconify/icons-mdi/chevron-double-left";
import { FolderData, BinderData, StudySetData } from "./DropBlockMenuData";
import { ProfileData } from "./ProfileData";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import trashCanOutline from "@iconify/icons-mdi/trash-can-outline";
import Portal from "../General/Portal";
import Block from "../General/Block";
import Settings from "../Settings/Settings";
import DeleteBlock from "./DeleteBlock";

function Sidebar({
  sidebar,
  handleSidebar,
  folderBlocks,
  handleFolderBlocks,
  handleNameChange,
}) {
  const [profileMenu, setProfileMenu] = useState(false);
  const [settingsPage, setSettingsPage] = useState(false);
  const [deletedItems, setDeletedItems] = useState([]);
  const [trashCan, setTrashCan] = useState(false);

  const deleteForever = (index) => {
    const deletedItemsArray = deletedItems.slice();
    deletedItemsArray.splice(index, 1);
    setDeletedItems(deletedItemsArray);
  };

  const convertArrayToObject = (array) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        item,
      };
    }, initialValue);
  };
  console.log(deletedItems);

  const addFolder = () => {
    const newFolder = {
      name: "",
      type: "folder",
      id: uuidv4(),
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
      id: uuidv4(),
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
      id: uuidv4(),
      iconColour: "#2C2C31",
      tab: "notes",
    };
    const newFolderBlocksArray = folderBlocks.slice();
    newFolderBlocksArray[folderIndex].binders[binderIndex].studySets.push(
      newStudySet
    );

    newFolderBlocksArray[folderIndex].binders[binderIndex].isOpen = true;
    handleFolderBlocks(newFolderBlocksArray);
  };
  console.log(deletedItems);

  const deleteBlock = (type, folderIndex, binderIndex, studySetIndex) => {
    let itemsArray = folderBlocks.slice();
    let deletedItemsArray = [...deletedItems];
    let deleted;

    if (type === "folder") {
      deleted = itemsArray.splice(folderIndex, 1);
    } else if (type === "binder") {
      deleted = itemsArray[folderIndex].binders.splice(binderIndex, 1);
    } else if (type === "studySet") {
      deleted = itemsArray[folderIndex].binders[binderIndex].studySets.splice(
        studySetIndex,
        1
      );
    }

    deletedItemsArray.push(convertArrayToObject(deleted));
    setDeletedItems(deletedItemsArray);

    handleFolderBlocks(itemsArray);
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
        <div className="dekked-sidebarContainer">
          <div className="dekked-sidebar">
            <div className="sidebarTop">
              <div className="profile">
                <p className="p1 avatar">J</p>
                <p className="p3">Jane Doe</p>

                <Icons.MdArrowDropDown
                  className="icon active dropDownArrow down"
                  onClick={() => setProfileMenu(true)}
                />

                {profileMenu ? (
                  <Portal
                    state={profileMenu}
                    handleState={() => setProfileMenu(false)}
                  >
                    <div
                      className="dropdownMenu settingsMenu"
                      onClick={() => setProfileMenu(false)}
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
              <Icon
                className="icon active chevronDoubleLeft"
                onClick={handleSidebar}
                icon={chevronDoubleLeft}
              />
            </div>
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
                          isExpanded={() => openFolderBlock(folderIndex)}
                          isOpen={folder.isOpen}
                          dropBlockMenuData={FolderData}
                          handleNameChange={handleNameChange}
                          handleIconColour={handleIconColour}
                          folderBlocks={folderBlocks}
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
            <div className="sidebarBottom">
              <Block
                item={{
                  action: "Trash",
                  icon: <Icon className="icon trash" icon={trashCanOutline} />,
                }}
                handleTrash={() => setTrashCan(true)}
                backgroundColour="off-beige"
              />

              {trashCan ? (
                <Portal state={trashCan} handleState={() => setTrashCan(false)}>
                  <div className="deleteBlockContainer">
                    {deletedItems.length === 0 ? (
                      <p
                        className="p2 noBinders"
                        style={{ paddingLeft: "16px" }}
                      >
                        No items inside
                      </p>
                    ) : (
                      deletedItems.map((item, index) => (
                        <DeleteBlock
                          name={item.item.name}
                          type={item.item.type}
                          iconColour={item.item.iconColour}
                          handleDeleteForever={() => {
                            deleteForever(index);
                          }}
                        />
                      ))
                    )}
                  </div>
                </Portal>
              ) : null}
              <div className="addBlock" onClick={addFolder}>
                <Icons.MdAdd className="icon plus" />
                <p className="p1 addFolder">Add folder</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Sidebar;
