import React from "react";
import "./StudyButton.css";

interface Props {
  action: string;
  type: string;
  handleClick?: () => void;
}

const StudyButton: React.FC<Props> = ({ action, type, handleClick }) => {
  return (
    <div className="dekked-studyButtonContainer">
      <button className={`dekked-studyButton ${type} p1`} onClick={handleClick}>
        {action}
      </button>
      <span className="p1 grey">{`Next review in X days`}</span>
    </div>
  );
}

export default StudyButton;
