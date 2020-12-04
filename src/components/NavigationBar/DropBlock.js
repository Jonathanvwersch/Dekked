import React, { useState, useEffect } from "react";
import * as Icons from "react-icons/md";
import "./DropBlock.css";
import Block from "../General/Block";
import { AddBinderData } from "./AddBinderData";
import Portal from "../General/Portal";

function DropBlock({ type, handleDelete, name, key }) {
   const [coords, setCoords] = useState({});
   const [dropdownMenu, setDropdownMenu] = useState(false)
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newHeight = window.innerHeight;
      setHeight(newHeight);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }, []);


  return (
    <div className="DropBlock">
      <Icons.MdArrowDropDown className="icon dropDownArrow" />
      <img className={`icon ${type}`} alt={type}></img>
      <p className="p2">{name}</p>
      <Icons.MdMoreHoriz
        className="icon dots"
        onClick={e => {
          const rect = e.target.getBoundingClientRect();
          let bottomValue = height - rect.y
          let topValue = rect.y + window.scrollY;

          if (bottomValue < 185)
            topValue = rect.y - 135 

          setCoords({
            left: rect.x + rect.width / 2,
            top: topValue,
            bottom: bottomValue
          });
          setDropdownMenu(prevState => !prevState);
        }}
      ></Icons.MdMoreHoriz>
        {dropdownMenu ? (
      <Portal state={dropdownMenu} handleState= {() => setDropdownMenu(prevState => !prevState)}>
            <div onClick={() => setDropdownMenu(prevState => !prevState)} className="DropdownMenu" style={{ ...styles.popover, ...coords }}>
              {AddBinderData.map((item) => {
                return <Block handleDelete={handleDelete} item={item} />;
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
  }
};


export default DropBlock;
