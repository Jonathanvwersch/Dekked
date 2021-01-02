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
        <h3>Account</h3>
        <div id="accountAvatarContainer">
          <span className="p1">Avatar</span>
          <div id="accountAvatarButton">
            <div id="accountAvatar"></div>
            <Button type="secondary" action="Upload" />
          </div>
        </div>
        <div id="accountPersonalInfo">
          <span className="p1">Personal Info</span>
          <div id="account-input">
            <div>
              <span className="p3 grey">First name</span>
              <input type="text"></input>
            </div>
            <div>
              <span className="p3 grey">Last name</span>
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div id="accountPassword">
          <span className="p1">Password</span>
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
          close={true}
        >
          <ChangePassword handleState={handleChangePassword} />
        </Portal>
      ) : null}
    </>
  );
}

export default Account;
