import React from "react";
import "./ChangePassword.css";
import Button from "../Buttons/Button";

function ChangePassword({ handleState }) {
  return (
    <div className="dekked-passwordModalContainer">
      <div className="dekked-passwordModal">
        <div>
          <span className="p3 grey">Current password</span>
          <input type="text"></input>
        </div>
        <div>
          <span className="p3 grey">New password</span>
          <input type="text"></input>
        </div>
        <div>
          <span className="p3 grey">Confirm new password</span>
          <input type="text"></input>
        </div>
        <span id="passwordLength" className="p3">
          Your password must be atleast eight characters long
        </span>
        <Button type="primary" action="Update" />
      </div>
    </div>
  );
}

export default ChangePassword;
