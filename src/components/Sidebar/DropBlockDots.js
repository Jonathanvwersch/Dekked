import React, { useState, useEffect } from "react";
import ColourPicker from "./ColourPicker";
import Block from "../General/Block";
import Portal from "../General/Portal";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import * as Icons from "react-icons/md";
import { FolderData, BinderData, StudySetData } from "./DropBlockMenuData";

function DropBlockDots({
  item,
  handleFolderBlocks,
  folderBlocks,
  handleRename,
  handleDelete,
  handleAddItem,
  setIconColour,
  iconColour,
  studySetIndex,
  folderIndex,
  binderIndex,
}) {
  const dropBlockMenuData = item.type==="folder" ? FolderData : item.type==="binder" ? BinderData : StudySetData
  const [coords, setCoords] = useState({}); // Set mouse coordinates
  const [dropdownMenu, setDropdownMenu] = useState(false); // Set dropdown menu visibility
  const [colourPicker, setColourPicker] = useState(false); // Set visibility of colour picker component
  const [yPositionOfDropdownMenu, setYPositionofDropdownMenu] = useState(); // Set y position of dropdown menu
  const heightOfDropdownMenu = 30 * dropBlockMenuData.length; // Value is necessary to position dropdown menu based on mouse coordinates
  const heightOfColourPicker = 220; // Value is necessary to position colour picker based on mouse coordinates
 
  const positionComponents = (e, itemHeight) => {
    const rect = e.target.getBoundingClientRect();
    let bottomValue = window.innerHeight - rect.y; // distance from mouse click to bottom of window
    let topValue = rect.y; // distance from mouse click to top of window
    setYPositionofDropdownMenu(topValue);

    if (
      bottomValue < 1.5 * heightOfColourPicker &&
      topValue > heightOfColourPicker
    )
      setYPositionofDropdownMenu(topValue - heightOfColourPicker - 10);

    if (bottomValue < 1.4 * itemHeight && topValue > itemHeight) {
      topValue = rect.y - itemHeight - 10;
    }

    setCoords({
      left: rect.x + rect.width / 2,
      top: topValue,
    });
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

  const handleColourPicker = () => {
    const newCoords = {
      left: coords.left,
      top: yPositionOfDropdownMenu,
    };
    setCoords(newCoords);
    setColourPicker((prevState) => !prevState);
  };

  useEffect (() => {
    handleIconColour(item.type, folderIndex, binderIndex, studySetIndex, iconColour)
  }, [iconColour])

  const handleDropdownMenu = (e) => {
    positionComponents(e, heightOfDropdownMenu);
    setDropdownMenu((prevState) => !prevState);
  };

  return (
    <div id="dropBlockDots">
      <Icons.MdMoreHoriz
        className="icon active dots"
        onClick={(e) => {
          handleDropdownMenu(e);
        }}
      ></Icons.MdMoreHoriz>
      {dropdownMenu ? (
        <Portal state={dropdownMenu} handleState={() => setDropdownMenu(false)}>
          <div
            onClick={() => setDropdownMenu(false)}
            className="dropdownMenu dropBlocks"
            style={{ ...coords }}
          >
            {dropBlockMenuData.map((item, index) => {
              return item.action === "Delete" ? (
                <NavLink
                  to={{
                    pathname: `/${folderBlocks[0].type}/${folderBlocks[0].id}`,
                    state: {
                      type: "folder",
                      folderIndex: "0",
                    },
                  }}
                >
                  <Block
                    handleDelete={handleDelete}
                    handleRename={handleRename}
                    handleColourPicker={handleColourPicker}
                    handleAddItem={handleAddItem}
                    item={item}
                    key={uuidv4()}
                  />
                </NavLink>
              ) : (
                <Block
                  handleDelete={handleDelete}
                  handleRename={handleRename}
                  handleColourPicker={handleColourPicker}
                  handleAddItem={handleAddItem}
                  item={item}
                  key={uuidv4()}
                />
              );
            })}
          </div>
        </Portal>
      ) : null}
      {colourPicker ? (
        <Portal state={colourPicker} handleState={handleColourPicker}>
          <div style={{ ...coords }} className="colourPicker">
            <ColourPicker
              iconColour={iconColour}
              setIconColour={setIconColour}
            ></ColourPicker>
          </div>
        </Portal>
      ) : null}
    </div>
  );
}

export default DropBlockDots;
