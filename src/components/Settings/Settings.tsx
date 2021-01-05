import React from "react";
import Button from "../Buttons/Button";
import Block from "../General/Block";
import Account from "./Account";
import "./Settings.css";
import { SettingsData } from "./SettingsData";

const Settings:React.FC = () => {
  return (
    <>
      <div className="dekked-settings">
          <div className="dekked-settingsSidebar">
              <span className="p2 title">Settings</span>
              {SettingsData.map((item, index) => (
                <Block
                  item={item}
                  key={item.id}
                />
              ))}
          </div>
            <div className="dekked-settingsMainFrame">
              <div id="settingsContent">
                <Account />
              </div>
              <div id="save-changes">
                  <Button type="primary" action="Save changes" />
              </div>
            </div>
          </div>
    </>
  );
}

export default Settings;
