import React, { ButtonHTMLAttributes } from "react";
import "./Button.css";

interface Props {
  type: string;
  action: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ action, type, handleClick, disabled }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") handleClick;
  };

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      tab-index="0"
      aria-label={action}
      className={`dekked-button ${type} p2`}
    >
      {action}
    </button>
  );
};

export default Button;
