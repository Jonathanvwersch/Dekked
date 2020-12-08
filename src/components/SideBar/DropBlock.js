import React, { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import ColourPicker from "./ColourPicker";
import Block from "../General/Block";
import Portal from "../General/Portal";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

function DropBlock({
  type,
  handleDelete,
  handleAddItem,
  id,
  isExpanded,
  dropdownMenudata,
}) {
  const [coords, setCoords] = useState({}); // Set mouse coordinates
  const [dropdownMenu, setDropdownMenu] = useState(false); // Set dropdown menu visibility
  const [height, setHeight] = useState(window.innerHeight); // Get height of window at all times for positioning portal components
  const [editableName, setEditableName] = useState(false); // Set name of dropblock to be editable so that you can rename block
  const [colourPicker, setColourPicker] = useState(false); // Set visibility of colour picker component
  const [yPositionOfDropdownMenu, setYPositionofDropdownMenu] = useState(); // Set y position of dropdown menu
  const [iconColour, setIconColour] = useState("#2C2C31"); // Set colour of icons (necessary to change colours using colour picker)
  const [isOpen, setIsOpen] = useState(false); // Set dropdown arrows (open is a down arrow, closed is a right arrow)

  const ref = useRef(null); // Reference name of block to deactivate focus after renaming block

  const heightOfDropdownMenu = 30 * dropdownMenudata.length; // Value is necessary to position dropdown menu based on mouse coordinates
  const heightOfColourPicker = 220; // Value is necessary to position colour picker based on mouse coordinates

  // Position portal components based on mouse coordinates
  const positionComponents = (e, itemHeight) => {
    const rect = e.target.getBoundingClientRect();
    let bottomValue = height - rect.y; // distance from mouse click to bottom of window
    let topValue = rect.y + window.scrollY; // distance from mouse click to top of window
    setYPositionofDropdownMenu(topValue);

    if (
      bottomValue < 1.1 * heightOfColourPicker &&
      topValue > heightOfColourPicker
    )
      setYPositionofDropdownMenu(topValue - heightOfColourPicker - 10);
    else if (bottomValue < 1.4 * itemHeight && topValue > itemHeight) {
      topValue = rect.y - itemHeight - 10;
    }

    setCoords({
      left: rect.x + rect.width / 2,
      top: topValue,
    });
  };

  // Set orientation of dropdown arrow
  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleColourPicker = () => {
    const newCoords = {
      left: coords.left,
      top: yPositionOfDropdownMenu,
    };
    setCoords(newCoords);
    setColourPicker((prevState) => !prevState);
  };

  const handleRename = () => {
    setEditableName((prevValue) => !prevValue);
    // Focus in on name of dropblock when being renamed (i.e. show text cursor)
    var div = document.querySelector(`p[id="${id}"]`);
    setTimeout(function () {
      div.focus();
    }, 0);
  };

  const handleDropdownMenu = (e) => {
    positionComponents(e, heightOfDropdownMenu);
    setDropdownMenu((prevState) => !prevState);
  };

  useEffect(() => {
    const updateEditableName = (e) => {
      // When user clicks away from name, make sure the beginning of the name is shown
      let fileName = document.querySelector(`p[id="${id}"]`);
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
        if (!ref.current.contains(e.target)) {
          setEditableName((prevValue) => !prevValue);
        }
      }
    };
    document.addEventListener("click", updateEditableName);

    return () => {
      document.removeEventListener("click", updateEditableName);
    };
  }, [editableName]);

  // Get window dimensions on each rerender to calculate position of portal components
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="DropBlock">
      <div
        className={
          isOpen
            ? `icon ${type} dropDownArrow down`
            : `icon ${type} dropDownArrow right`
        }
        onClick={() => {
          handleIsOpen();
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
      <p
        ref={ref}
        id={id}
        spellCheck="false"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setEditableName((prevValue) => !prevValue);
          }
        }}
        contentEditable={editableName}
        className="p2"
      ></p>
      <Icons.MdMoreHoriz
        className="icon dots"
        onClick={(e) => {
          handleDropdownMenu(e);
        }}
      ></Icons.MdMoreHoriz>
      {dropdownMenu ? (
        <Portal
          state={dropdownMenu}
          handleState={() => setDropdownMenu((prevState) => !prevState)}
        >
          <div
            onClick={() => setDropdownMenu((prevState) => !prevState)}
            className="DropdownMenu"
            style={{ ...styles.popover, ...coords }}
          >
            {dropdownMenudata.map((item, index) => {
              return (
                <Block
                  handleDelete={handleDelete}
                  handleRename={handleRename}
                  handleColourPicker={handleColourPicker}
                  handleAddItem={handleAddItem}
                  showDropBlocks={isExpanded}
                  setDropdownArrow={setIsOpen}
                  item={item}
                  id={`${item} Block ${index}`}
                  key={`${item} Block ${index}`}
                />
              );
            })}
          </div>
        </Portal>
      ) : null}
      {colourPicker ? (
        <Portal state={colourPicker} handleState={handleColourPicker}>
          <div
            style={{ ...styles.popover, ...coords }}
            className="colourPicker"
          >
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

const styles = {
  popover: {
    position: "absolute",
    transform: "translate(0, 15px)",
  },
};

export default DropBlock;
