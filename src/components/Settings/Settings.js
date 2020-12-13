import React, { useState } from "react";
import Button from "../Buttons/Button";
import Block from "../General/Block";
import Account from "./Account";
import "./Settings.css";
import { SettingsData } from "./SettingsData";

function Settings({ handleState }) {
  return (
    <>
      <div className="dekked-settings-container">
        <div className="dekked-settings">
          <div className="dekked-settings-sidebar">
            <div className="title p2">
              <p className="p2">Settings</p>
            </div>
            <div
              style={{ background: "var(--off-beige-clicked)" }}
              className="dekked-settings-blocks-container"
            >
              {SettingsData.map((item, index) => (
                <Block
                  colour="off-beige"
                  item={item}
                  key={`${item} Block ${index}`}
                />
              ))}
            </div>
          </div>

          <div className="dekked-settings-mainFrame-container">
            <div className="dekked-settings-mainFrame">
              <div className="content">
                <Account />
              </div>
              <div id="save-changes">
                <div id="save-changes-button">
                  <Button type="primary" action="Save changes" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
