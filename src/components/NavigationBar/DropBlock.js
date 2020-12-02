import React, { useState, useRef, useEffect } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import Block from "../General/Block";
import { AddBinderData } from "./AddBinderData";

function DropBlock({ type, handleDelete }) {
  const [position, setPosition] = useState("upper");
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const showDropdownMenu = (e) => {
    setDropdownMenu(!dropdownMenu);

    if (window.innerHeight - e.clientY > 170) setPosition("upper");
    else setPosition("lower");
  };

  const closeDropdownMenu = (e) => {
    setDropdownMenu(false);
  };

  useEffect(() => {
    if (dropdownMenu) {
      document.addEventListener("click", closeDropdownMenu);
    } else {
      document.removeEventListener("click", closeDropdownMenu);
    }

    return () => {
      document.removeEventListener("click", closeDropdownMenu);
    };
  }, [dropdownMenu]);

  return (
    <div className="DropBlock">
      <Icons.MdArrowDropDown className="icon dropDownArrow" />
      <img className={`icon ${type}`} alt={type}></img>
      <p className="p2">Untitled</p>
      <Icons.MdMoreHoriz
        onClick={showDropdownMenu}
        className="icon dots"
      ></Icons.MdMoreHoriz>
      {dropdownMenu ? (
        <div className={`DropdownMenu ${position}`}>
          {AddBinderData.map((item, index) => {
            return <Block item={item} handleDelete={handleDelete} />;
          })}
        </div>
      ) : null}
    </div>
  );
}

export default DropBlock;
