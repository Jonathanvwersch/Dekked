import React from "react";
import "./Flashcard.css";
import * as Icons from "react-icons/md";

function Flashcard({deleteFlashcard}) {
  return (
    <div className="flashcard-container">
      <div className="flashcard">
        <div className="flashcard-header">
          <div></div>
          <div onClick={deleteFlashcard} className="icon active delete">
            <Icons.MdDeleteForever />
          </div>
        </div>
        <div className="flashcard-text">
          <div className="flashcard-front"></div>
          <div className="flashcard-back"></div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
