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
          <label className="p3 grey">Current password</label>
          <input  type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey">New password</label>
          <input type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey">Confirm new password</label    >
          <input className="passwordInput" type="text"></input>
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
