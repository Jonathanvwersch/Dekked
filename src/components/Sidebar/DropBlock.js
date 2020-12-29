import React, { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import ColourPicker from "./ColourPicker";
import Block from "../General/Block";
import Portal from "../General/Portal";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function DropBlock({
  type,
  handleDelete,
  handleAddItem,
  id,
  isExpanded,
  isOpen,
  dropBlockMenuData,
  handleNameChange,
  folderIndex,
  binderIndex,
  studySetIndex,
  folderBlocks,
  handleFolderBlocks
}) {
  const [coords, setCoords] = useState({}); // Set mouse coordinates
  const [dropdownMenu, setDropdownMenu] = useState(false); // Set dropdown menu visibility
  const [editableName, setEditableName] = useState(false); // Set name of dropblock to be editable so that you can rename block
  const [colourPicker, setColourPicker] = useState(false); // Set visibility of colour picker component
  const [yPositionOfDropdownMenu, setYPositionofDropdownMenu] = useState(); // Set y position of dropdown menu
  const [iconColour, setIconColour] = useState("#2C2C31"); // Set colour of icons (necessary to change colours using colour picker)

  const nameRef = useRef(null); // Reference name of block to deactivate focus after renaming block

  const heightOfDropdownMenu = 30 * dropBlockMenuData.length; // Value is necessary to position dropdown menu based on mouse coordinates
  const heightOfColourPicker = 220; // Value is necessary to position colour picker based on mouse coordinates

  // Position portal components based on mouse coordinates
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
    handleIconColour(type, folderIndex, binderIndex, studySetIndex, iconColour);
  };

  const handleRename = () => {
    // Focus in on name of dropblock when being renamed (i.e. show text cursor)
    var div = document.querySelector(`span[id="${id}"]`);
    setTimeout(function () {
      setEditableName((prevValue) => !prevValue);
      div.focus();
    }, 0);
  };

  const handleDropdownMenu = (e) => {
    positionComponents(e, heightOfDropdownMenu);
    setDropdownMenu((prevState) => !prevState);
  };

  useEffect(() => {
    // Set name of dropblock using data from folder block
    if (editableName === false) {
      if (type === "folder") {
        nameRef.current.innerText = folderBlocks[folderIndex].name;
      } else if (type === "binder") {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].name;
      } else if (type === "studySet") {
        nameRef.current.innerText =
          folderBlocks[folderIndex].binders[binderIndex].studySets[
            studySetIndex
          ].name;
      }
    }
  }, [
    folderBlocks,
    editableName,
    studySetIndex,
    binderIndex,
    folderIndex,
    type,
  ]);

  useEffect(() => {
    const updateEditableName = (e) => {
      // When user clicks away from name, make sure the beginning of the name is shown
      let fileName = document.querySelector(`span[id="${id}"]`);
      if (fileName) {
        fileName.addEventListener(
          "blur",
          function (e) {
            this.scrollLeft = "0px";
          },
          true
        );
      }

      // If user clicks outside of name of dropblock, turn off editability of name
      if (editableName === true) {
        if (!nameRef.current.contains(e.target)) {
          setEditableName((prevValue) => !prevValue);
        }
      }
    };
    document.addEventListener("click", updateEditableName);

    return () => {
      document.removeEventListener("click", updateEditableName);
    };
  }, [editableName, id]);

  return (
    <>
      <div role="button" className="dekked-dropBlock">
        <div
          className={
            isOpen
              ? `icon active dropDownArrow down ${type}`
              : `icon active dropDownArrow right  ${type}`
          }
          onClick={() => {
            isExpanded();
          }}
        >
          {type !== "studySet" ? <Icons.MdArrowDropDown /> : null}
        </div>
        <div className={`icon ${type}`}>
          {type === "folder" ? (
            <FolderIcon fill={iconColour} />
          ) : type === "binder" ? (
            <BinderIcon stroke={iconColour} />
          ) : (
            <StudySetIcon stroke={iconColour} />
          )}
        </div>
        <span
          ref={nameRef}
          id={id}
          spellCheck="false"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditableName((prevValue) => !prevValue);
            }
            setTimeout(function () {
              handleNameChange(
                type,
                folderIndex,
                binderIndex,
                studySetIndex,
                nameRef.current.innerText
              );
            }, 100);
          }}
          contentEditable={editableName}
          className="p2"
        ></span>
        <Icons.MdMoreHoriz
          className="icon active dots"
          onClick={(e) => {
            handleDropdownMenu(e);
          }}
        ></Icons.MdMoreHoriz>
      </div>
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
                    showDropBlocks={isExpanded}
                    item={item}
                    id={uuidv4()}
                    key={uuidv4()}
                  />
                </NavLink>
              ) : (
                <Block
                  handleDelete={handleDelete}
                  handleRename={handleRename}
                  handleColourPicker={handleColourPicker}
                  handleAddItem={handleAddItem}
                  showDropBlocks={isExpanded}
                  item={item}
                  id={uuidv4()}
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
    </>
  );
}
export default DropBlock;
