import React from "react";
import "./StudyButton.css";

function StudyButton({ action, type, handleClick }) {
  return (
    <div className="dekked-studyButtonContainer">
      <button className={`dekked-studyButton ${type} p1`} onClick={handleClick}>
        {action}
      </button>
      <div className="p1 grey">{`Next review in X days`}</div>
    </div>
  );
}

export default StudyButton;
