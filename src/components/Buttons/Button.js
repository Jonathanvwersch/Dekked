import React, { useState } from "react";
import "./Button.css";

const Button = ({ type, action, handleClick }) => {
  return (
    <React.Fragment>
      <button onClick={handleClick} className={`Button ${type}`}>
        <p className="p2">{action}</p>
      </button>
    </React.Fragment>
  );
};

export default Button;
