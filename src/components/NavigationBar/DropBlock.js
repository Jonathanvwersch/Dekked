import React, { useState, useEffect, useRef } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import Block from "../General/Block";
import { AddBinderData } from "./AddBinderData";
import Portal from "../General/Portal";

function DropBlock({ type, handleDelete, id }) {
  const ref = useRef(null);
  const [coords, setCoords] = useState({});
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [editableName, setEditableName] = useState(false);

  const handleRename = () => {
    setEditableName((prevValue) => !prevValue);
    var div = document.querySelector(`p[id="${id}"]`);
    setTimeout(function () {
      div.focus();
    }, 0);
  };

  useEffect(() => {
    const updateEditableName = (e) => {
      document.querySelector(`p[id="${id}"]`).addEventListener(
        "blur",
        function (e) {
          this.scrollLeft = "0px";
        },
        true
      );
      if (editableName === true) {
        if (!ref.current.contains(e.target)) {
          setEditableName(false);
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
      <div className="icon dropDownArrow">
        <Icons.MdArrowDropDown />
      </div>
      <img className={`icon ${type}`} alt={type}></img>
      <p
        ref={ref}
        id={id}
        spellCheck="false"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setEditableName(false);
          }
        }}
        contentEditable={editableName}
        className="p2"
      ></p>
      <Icons.MdMoreHoriz
        className="icon dots"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          let bottomValue = height - rect.y;
          let topValue = rect.y + window.scrollY;

          if (bottomValue < 185) topValue = rect.y - 135;

          setCoords({
            left: rect.x + rect.width / 2,
            top: topValue,
            bottom: bottomValue,
          });
          setDropdownMenu((prevState) => !prevState);
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
            {AddBinderData.map((item, index) => {
              return (
                <Block
                  handleDelete={handleDelete}
                  handleRename={handleRename}
                  item={item}
                  id={`${item} Block ${index}`}
                  key={`${item} Block ${index}`}
                />
              );
            })}
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
