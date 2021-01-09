import React, { useState } from "react";
import Button from "../../../Buttons/Button/Button";
import "./Account.css";
import ChangePassword from "../ChangePassword/ChangePassword";

const Account: React.FC = () => {
  const [changePassword, setChangePassword] = useState<boolean>(false);
  return (
    <>
      <div className="account">
        <h3>Account</h3>
        <div className="accountAvatarContainer">
          <span className="p1">Avatar</span>
          <div className="accountAvatarButton">
            <div className="accountAvatar"></div>
            <Button type="secondary" action="Upload" />
          </div>
        </div>
        <div className="accountPersonalInfo">
          <span className="p1">Personal Info</span>
          <div className="accountInput">
            <div>
              <label htmlFor="firstName" className="p3 grey">
                First name
              </label>
              <input className="firstName" type="text"></input>
            </div>
            <div>
              <label htmlFor="lastName" className="p3 grey">
                Last name
              </label>
              <input className="lastName" type="text"></input>
            </div>
          </div>
        </div>
        <div className="accountPassword">
          <span className="p1">Password</span>
          <Button
            handleClick={() => setChangePassword(true)}
            type="secondary"
            action="Change password"
          />
        </div>
      </div>
      <ChangePassword
        handleChangePassword={() => setChangePassword(false)}
        changePassword={changePassword}
      />
    </>
  );
};

export default Account;
