import React from "react";
import "./Button.css";

const Button = ({ type, action, handleClick, disabled }) => {
  return (
      <button disabled = {disabled} onClick={handleClick} className={`dekked-button ${type} p2`}>
        {action}
      </button>
  );
};

export default Button;
