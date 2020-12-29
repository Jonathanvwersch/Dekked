import React, { useState } from "react";
import { Icon } from "@iconify/react";
import chevronDoubleLeft from "@iconify/icons-mdi/chevron-double-left";
import { ProfileData } from "./ProfileData";
import Settings from "../Settings/Settings";
import Portal from "../General/Portal";
import "./SidebarTop.css";
import Block from "../General/Block";
import { MdArrowDropDown } from "react-icons/md";

function SidebarTop({ handleSidebar }) {
  const [profileMenu, setProfileMenu] = useState(false);
  const [settingsPage, setSettingsPage] = useState(false);
  const handleSettings = () => {
    setSettingsPage((prevState) => !prevState);
  };
  return (
    <>
      <div className="sidebarTop">
        <div className="profile">
          <span className="p1 avatar">J</span>
          <span className="p3">Jane Doe</span>

          <MdArrowDropDown
            className="icon active dropDownArrow down"
            onClick={() => setProfileMenu(true)}
          />
        </div>

        <Icon
          className="icon active chevronDoubleLeft"
          onClick={handleSidebar}
          icon={chevronDoubleLeft}
        />
      </div>

      {profileMenu ? (
        <Portal state={profileMenu} handleState={() => setProfileMenu(false)}>
          <div
            className="dropdownMenu settingsMenu"
            onClick={() => setProfileMenu(false)}
          >
            {ProfileData.map((item, index) => {
              return (
                <Block
                  item={item}
                  key={`${item} Block ${index}`}
                  handleSettings={handleSettings}
                />
              );
            })}
          </div>
        </Portal>
      ) : null}
      {settingsPage ? (
        <Portal
          state={settingsPage}
          handleState={handleSettings}
          lightbox={true}
          center={true}
          close={true}
        >
          <Settings handleState={handleSettings} />
        </Portal>
      ) : null}
    </>
  );
}

export default SidebarTop;
