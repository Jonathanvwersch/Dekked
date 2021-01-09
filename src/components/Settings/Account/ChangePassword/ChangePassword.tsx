import React from "react";
import "./ChangePassword.css";
import Button from "../../../Buttons/Button/Button";
import Portal from "../../../General/Portal/Portal";

interface Props {
  handleChangePassword: () => void;
  changePassword: boolean;
}

const ChangePassword: React.FC<Props> = ({
  handleChangePassword,
  changePassword,
}) => {
  return changePassword ? (
    <Portal
      handleState={handleChangePassword}
      state={changePassword}
      lightbox={true}
      center={true}
      close={true}
    >
      <div className="dekked-passwordModal">
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="currentPasswordInput">
            Current password
          </label>
          <input id="currentPasswordInput" type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="newPasswordInput">
            New password
          </label>
          <input id="newPasswordInput" type="text"></input>
        </div>
        <div className="passwordInput">
          <label className="p3 grey" htmlFor="confirmPasswordInput">
            Confirm new password
          </label>
          <input id="confirmPasswordInput" type="text"></input>
        </div>
        <span className="p3 passwordLength">
          Your password must be atleast eight characters long
        </span>
        <div>
          <Button type="primary" action="Update" />
        </div>
      </div>
    </Portal>
  ) : null;
};

export default ChangePassword;
