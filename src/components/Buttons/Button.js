import React from "react";
import "./Button.css";

const Button = ({ type, action, handleClick }) => {
  return (
      <button onClick={handleClick} className={`Button ${type}`}>
        <p className="p2">{action}</p>
      </button>
  );
};

export default Button;
