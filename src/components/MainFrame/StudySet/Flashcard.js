import React from "react";
import "./Flashcard.css";
import * as Icons from "react-icons/md";
import Toolbar from "./Toolbar";

function Flashcard({ deleteFlashcard, index }) {
  return (
    <div className="flashcardContainer">
      <div className="flashcard">
        <div className="flashcardHeader">
          <p className="p1 bold">{index + 1}</p>
          <Toolbar />

          <Icons.MdDeleteForever
            className="icon active delete"
            onClick={deleteFlashcard}
          />
        </div>
        <div className="flashcardText">
          <div className="flashcardFront">
            <p className="p1">Front</p>
          </div>
          <div className="flashcardBack">
            <p className="p1">Back</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
