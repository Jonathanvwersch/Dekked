import React from "react";
import "./TopBar.css";
import * as Icons from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { showSideBar } from "../../actions";

function TopBar() {
  const SideBarReducer = useSelector((state) => state.SideBarReducer);
  const dispatch = useDispatch();

  const dispatchSideBar = () => {
    dispatch(showSideBar());
  };

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
          {!SideBarReducer ? (
            <div className="icon hamburgerMenu" onClick={dispatchSideBar}>
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
