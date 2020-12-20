import React from "react";
import "./Button.css";

const Button = ({ type, action, handleClick }) => {
  return (
    <React.Fragment>
      <button disabled onClick={handleClick} className={`Button ${type}`}>
        <p className="p2">{action}</p>
      </button>
    </React.Fragment>
  );
};

export default Button;
