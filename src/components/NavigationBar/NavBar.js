import React, { useState } from "react";
import * as Icons from "react-icons/md";
import DropBlock from "./DropBlock";
import "./NavBar.css";

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
                  <Icons.MdArrowDropDown className="icon dropDownArrow down" />
                </div>
                <div className="collapse">
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
                  <Icons.MdAdd className="icon plus" />
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
