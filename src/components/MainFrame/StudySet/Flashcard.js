import React from "react";
import "./Flashcard.css";
import * as Icons from "react-icons/md";
import Toolbar from "./Toolbar";

function Flashcard({ deleteFlashcard, index }) {
  return (
    <div className="dekked-flashcardContainer">
      <div className="flashcard">
        <div className="flashcardHeader">
          <span className="p1 bold">{index + 1}</span>
          <Toolbar />
          <Icons.MdDeleteForever
            className="icon active delete"
            onClick={deleteFlashcard}
          />
        </div>
        <div className="flashcardText">
          <div className="flashcardFront">
            <span className="p3">Front</span>
          </div>
          <div className="flashcardBack">
            <span className="p3">Back</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
