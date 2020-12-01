import React, { useState } from "react";
import * as Icons from "react-icons/md";
import { IconContext } from "react-icons";
import AddBlock from "./AddBlock";
import DropBlock from "./DropBlock";
import Block from "../General/Block";
import "./NavBar.css";

function NavBar() {
  const [dropBlocks, setDropBlocks] = useState([]);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [sideBar, setSideBar] = useState(true);

  const showDropdownMenu = () => {
    console.log(dropdownMenu);
    setDropdownMenu(true);
  };

  const showSideBar = () => {
    setSideBar(!sideBar);
  };

  const addFolder = () => {
    let dropBlocksArray = [...dropBlocks];
    dropBlocksArray.push({
      dropBlock: <DropBlock type="folder" />,
    });
    setDropBlocks(dropBlocksArray);
  };

  return (
    <>
      <Icons.MdMenu className="icon hamburger" onClick={showSideBar} />
      <nav className={sideBar ? "navBar active" : "navBar"}>
        <div className="top">
          <div className="profile">
            <div className="avatar">
              <p className="p1">J</p>
            </div>
            <p className="p3">Jane Doe</p>
            <Icons.MdArrowDropDown className="icon dropDownArrow down" />
          </div>
          <div onClick={showSideBar} className="collapse">
            <svg
              className="icon chevronDoubleLeft"
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.2735 7.06L2.22016 4L5.2735 0.94L4.3335 0L0.333496 4L4.3335 8L5.2735 7.06Z"
                fill="#2C2C31"
              />
              <path
                d="M10.2134 7.06L7.1601 4L10.2134 0.94L9.27344 0L5.27344 4L9.27344 8L10.2134 7.06Z"
                fill="#2C2C31"
              />
            </svg>
          </div>
        </div>
        <div className="workspace">
          <div className="title">
            <p className="p2">Workspace</p>
          </div>
          {dropBlocks.map((dropBlock, index) => (
            <div key={index} className="dropBlocks">
              {dropBlock.dropBlock}
            </div>
          ))}
        </div>
        <AddBlock onButtonClick={addFolder} />
      </nav>
    </>
  );
}

export default NavBar;
