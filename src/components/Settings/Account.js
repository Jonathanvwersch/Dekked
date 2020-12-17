import React, { useState } from "react";
import Button from "../Buttons/Button";
import "./Account.css";
import ChangePassword from "./ChangePassword";
import Portal from "../General/Portal";

function Account() {
  const [changePassword, setChangePassword] = useState(false);
  const handleChangePassword = () => {
    setChangePassword((prevState) => !prevState);
  };
  return (
    <>
      <div className="account">
        <div id="account-title">
          <h3>Account</h3>
        </div>
        <div id="account-avatar-container">
          <p className="p1">Avatar</p>
          <div id="account-avatar-button">
            <div id="account-avatar"></div>
            <Button type="secondary" action="Upload" />
          </div>
        </div>
        <div id="account-personal-info">
          <p className="p1">Personal Info</p>

          <div id="account-input">
            <div id="account-first-name">
              <p className="p3">First name</p>
              <input type="text"></input>
            </div>
            <div id="account-last-name">
              <p className="p3">Last name</p>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div id="account-password">
          <div id="account-password-title">
            <p className="p1">Password</p>
          </div>
          <Button
            handleClick={handleChangePassword}
            type="secondary"
            action="Change password"
          />
        </div>
      </div>
       {changePassword ? (
        <Portal
          handleState={handleChangePassword}
          state={changePassword}
          lightbox={true}
          center={true}
          level={1}
          close={true}
        >
          <ChangePassword handleState={handleChangePassword} />
        </Portal>
      ) : null}
    </>
  );
}

export default Account;
