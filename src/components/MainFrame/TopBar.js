import React from "react";
import "./TopBar.css";
import * as Icons from "react-icons/md";


function TopBar({sidebar, handleSidebar}) {

  return (
    <>
      <div className="dekked-top-bar">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "absolute",
            overflow: "hidden",
            height: "60px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            paddingLeft: "16px",
          }}
        >
          {!sidebar ? (
            <div className="icon active hamburgerMenu" onClick={handleSidebar}>
              <Icons.MdMenu />
            </div>
          ) : null}
        </div>
      </div>
      <div style={{ width: "100%", userSelect: "none" }}></div>
    </>
  );
}

export default TopBar;
