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
        <div id="title">
          <h3>Account</h3>
        </div>
        <div id="avatar-container">
          <p className="p1">Avatar</p>
          <div id="avatar-button">
            <div id="avatar"></div>
            <Button type="secondary" action="Upload" />
          </div>
        </div>
        <div id="personal-info">
          <p className="p1">Personal Info</p>

          <div id="input">
            <div id="first-name">
              <p className="p3">First name</p>
              <input type="text"></input>
            </div>
            <div id="last-name">
              <p className="p3">Last name</p>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div id="password">
          <div id="password-title">
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
