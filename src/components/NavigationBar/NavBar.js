import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./NavBar.css";
import { ReactComponent as ChevronDoubleLeftIcon } from "../../custom-icons/chevronDoubleLeft.svg";

function NavBar() {
  const [folderBlocks, setFolderBlocks] = useState([]);

  const deleteFolderBlock = (id) => {
    const array = folderBlocks.filter((item) => item.id !== id);
    setFolderBlocks(array);
  };

  const addFolder = () => {
    const newFolderBlock = {
      type: "folder",
      id: Math.random(),
    };
    setFolderBlocks((folderBlocks) => [...folderBlocks, newFolderBlock]);
  };

  return (
    <>
      <div className="dekked-sidebar-container">
        <div style={{ height: "100%" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              bottom: "0px",
              display: "flex",
              flexDirection: "column",
              width: "0px",
              overflow: "visible",
              zIndex: "9",
              pointerEvents: "none",
            }}
          >
            <div className="dekked-sidebar">
              <div className="sidebar-top">
                <div className="profile">
                  <div className="avatar">
                    <p className="p1">J</p>
                  </div>
                  <p className="p3">Jane Doe</p>
                  <div className="icon dropDownArrow down">
                    <Icons.MdArrowDropDown />
                  </div>
                </div>
                <div className="icon chevronDoubleLeft">
                  <ChevronDoubleLeftIcon />
                </div>
              </div>
              <div className="workspace">
                <div className="title">
                  <p className="p2">Workspace</p>
                </div>
                <div className="folderBlocks">
                  {folderBlocks.map((item, index) => (
                    <div key={item.id} className="folderBlock">
                      <DropBlock
                        type={item.type}
                        key={item.id}
                        id={item.id}
                        handleDelete={() => deleteFolderBlock(item.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="sidebar-bottom">
                <div onClick={addFolder} className="AddBlock">
                  <div className="icon plus">
                    <Icons.MdAdd />
                  </div>
                  <p className="p1">Add folder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

// {
//   /* <Icons.MdMenu className="icon hamburger" onClick={showSideBar} />; */
// }
