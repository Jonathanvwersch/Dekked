import React from "react";
import "./LinkedFlashcard.css";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";

function LinkedFlashcard() {
  return (
    <div className="linked-flashcard-container">
      <div className="linked-flashcard-tab">
        <div className="icon active logo">
          <LogoIcon />
        </div>
      </div>
      <div className="linked-flashcard"></div>
    </div>
  );
}

export default LinkedFlashcard;
