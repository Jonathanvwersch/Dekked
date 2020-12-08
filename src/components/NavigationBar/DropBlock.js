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
  const [coords, setCoords] = useState({});
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [editableName, setEditableName] = useState(false);
  const [colourPicker, setColourPicker] = useState(false);
  const [yPositionOfDropdownMenu, setYPositionofDropdownMenu] = useState();
  const [iconColour, setIconColour] = useState("#2C2C31");
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const heightOfDropdownMenu = 30 * dropdownMenudata.length;
  const heightOfSketchPicker = 220;

  const positionComponents = (e, itemHeight) => {
    const rect = e.target.getBoundingClientRect();
    let bottomValue = height - rect.y;
    let topValue = rect.y + window.scrollY;
    setYPositionofDropdownMenu(topValue);

    if (
      bottomValue < 1.1 * heightOfSketchPicker &&
      topValue > heightOfSketchPicker
    )
      setYPositionofDropdownMenu(topValue - heightOfSketchPicker - 10);

    if (bottomValue < 1.4 * itemHeight && topValue > itemHeight) {
      topValue = rect.y - itemHeight - 10;
    }

    setCoords({
      left: rect.x + rect.width / 2,
      top: topValue,
    });
  };

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
            e.preventDefault();
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
