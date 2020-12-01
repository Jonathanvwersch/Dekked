import React, { useState, useRef, useEffect } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import Block from "../General/Block";
import {AddBinderData} from "./AddBinderData"

function DropBlock({ type }) {
  const outside = useRef();
  const [position, setPosition] = useState("upper")
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const outsideClick = (e) => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setDropdownMenu(false);
  };

  const showDropdownMenu = (e) => {
    setDropdownMenu(!dropdownMenu);

    if ((window.innerHeight) - (e.clientY) > 170 )
      setPosition("upper");

    else 
      setPosition("lower")
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", outsideClick);

    return () => {
      getClick()
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
        <div className={`DropdownMenu ${position}`}>
          {AddBinderData.map((item, index) => {
            return <Block item= {item} key={index} />
          })}
        </div>
      ) : null}
    </div>
  );
}

export default DropBlock;
