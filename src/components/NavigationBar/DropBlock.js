import React, { useState, useRef, useEffect } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import Block from "../General/Block";

function DropBlock({ type }) {
  const outside = useRef();
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const outsideClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setDropdownMenu(false);
  };

  const showDropdownMenu = () => {
    console.log(dropdownMenu);
    setDropdownMenu(!dropdownMenu);
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", outsideClick);

    return () => {
      getClick();
    };
  }, []);

  return (
    <div className="DropBlock" ref={outside}>
      <Icons.MdArrowDropDown className="icon dropDownArrow" />
      <img className={`icon ${type}`} alt={type}></img>
      <p className="p2">Untitled</p>
      <Icons.MdMoreHoriz
        onClick={showDropdownMenu}
        className="icon dots"
      ></Icons.MdMoreHoriz>
      {dropdownMenu ? (
        <div className="DropdownMenu">
          <Block action="folder" icon="MdAdd" />
          <Block action="folder" icon="MdAdd" />
          <Block action="folder" icon="MdAdd" />
          <Block action="folder" icon="MdAdd" />
          <Block action="folder" icon="MdAdd" />
        </div>
      ) : null}
    </div>
  );
}

export default DropBlock;
