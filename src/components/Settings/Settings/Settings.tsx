import React from "react";
import Button from "../../Buttons/Button/Button";
import Block from "../../General/Block/Block";
import { Scroller } from "../../General/Scroller/Scroller";
import Account from "../Account/Account/Account";
import "./Settings.css";
import { SettingsData } from "./SettingsData";

const Settings: React.FC = () => {
  return (
    <>
      <div className="dekked-settings">
        <div className="dekked-settingsSidebar">
          <span className="p2 title">Settings</span>
          <Scroller Data={SettingsData} />
        </div>
        <div className="dekked-settingsMainFrame">
          <div className="settingsContent">
            <Account />
          </div>
          <div className="saveChanges">
            <Button type="primary" action="Save changes" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
