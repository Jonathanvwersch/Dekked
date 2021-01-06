import React, { useState } from "react";
import { Icon } from "@iconify/react";
import chevronDoubleLeft from "@iconify/icons-mdi/chevron-double-left";
import { ProfileData } from "./ProfileData";
import Settings from "../../Settings/Settings/Settings";
import Portal from "../../General/Portal/Portal";
import "./SidebarTop.css";
import Block from "../../General/Block/Block";
import { MdArrowDropDown } from "react-icons/md";

interface Props {
  handleSidebar: () => void;
  hoverbar: boolean;
}

const SidebarTop: React.FC<Props> = ({ handleSidebar, hoverbar }) => {
  const [profileMenu, setProfileMenu] = useState<boolean>(false);
  const [settingsPage, setSettingsPage] = useState<boolean>(false);
  const handleSettings = () => {
    setSettingsPage((prevState) => !prevState);
  };

  const hoverStyleSidebar = {
    top: "110px",
  } as React.CSSProperties;

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
        {!hoverbar ? (
          <div
            className="icon active chevronDoubleLeft"
            onClick={handleSidebar}
          >
            <Icon icon={chevronDoubleLeft} />
          </div>
        ) : null}
      </div>

      {profileMenu ? (
        <Portal state={profileMenu} handleState={() => setProfileMenu(false)}>
          <div
            className="dropdownMenu settingsMenu"
            onClick={() => setProfileMenu(false)}
            style={hoverbar ? hoverStyleSidebar : null}
          >
            {ProfileData.map((item, index) => {
              return (
                <Block
                  item={item}
                  key={`${item} Block ${index}`}
                  handleSettings={() =>
                    setSettingsPage((prevState) => !prevState)
                  }
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
          <Settings />
        </Portal>
      ) : null}
    </>
  );
};

export default SidebarTop;
