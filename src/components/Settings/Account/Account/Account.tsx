import React, { useState } from "react";
import Button from "../../../Buttons/Button/Button";
import "./Account.css";
import ChangePassword from "../ChangePassword/ChangePassword";
import Portal from "../../../General/Portal/Portal";


const Account:React.FC = () => {
  const [changePassword, setChangePassword] = useState<boolean>(false);
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
          <div id="accountInput">
            <div>
              <label htmlFor="firstName" className="p3 grey">First name</label>
              <input id="firstName" type="text"></input>
            </div>
            <div>
              <label htmlFor="lastName" className="p3 grey">Last name</label>
              <input id="lastName" type="text"></input>
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
