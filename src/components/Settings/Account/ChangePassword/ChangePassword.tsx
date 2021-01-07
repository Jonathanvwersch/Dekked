import React from "react";
import "./ChangePassword.css";
import Button from "../../../Buttons/Button/Button";

interface Props {
  handleState: () => void;
}

const ChangePassword:React.FC<Props> = ({ handleState }) => {
  return (
    <div className="dekked-passwordModalContainer">
      <div className="dekked-passwordModal">
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="currentPasswordInput">Current password</label>
          <input id="currentPasswordInput" type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="newPasswordInput">New password</label>
          <input id="newPasswordInput" type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="confirmPasswordInput">Confirm new password</label    >
          <input id="confirmPasswordInput" type="text"></input>
        </div>
        <span id="passwordLength" className="p3">
          Your password must be atleast eight characters long
        </span>
        <div >
          <Button type="primary" action="Update" />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
