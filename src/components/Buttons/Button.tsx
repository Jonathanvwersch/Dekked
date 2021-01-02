import React from "react";
import "./Button.css";

interface Props {
   type:string;
   action: string;
   handleClick?: () => void;
   disabled?: boolean;
}

const Button:React.FC<Props> = ({action,type,handleClick,disabled}) => {
  return (
      <button disabled = {disabled} onClick={handleClick} className={`dekked-button ${type} p2`}>
        {action}
      </button>
  );
};

export default Button;
