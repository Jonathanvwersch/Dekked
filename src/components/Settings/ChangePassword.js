import React from "react";
import "./ChangePassword.css";
import Button from "../Buttons/Button";

function ChangePassword({ handleState }) {
  return (
    <div className="dekked-password-modal-container">
      <div className="dekked-password-modal">
        <div id="current-password">
          <p className="p3">Current password</p>
          <input type="text"></input>
        </div>
        <div id="new-password">
          <p className="p3">New password</p>
          <input type="text"></input>
        </div>
        <div id="confirm-password">
          <p className="p3">Confirm new password</p>
          <input type="text"></input>
        </div>
        <div id="password-length">
          <p className="p3">
            Your password must be atleast eight characters long
          </p>
        </div>
        <div id="button">
          <Button type="primary" action="Update" />
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
