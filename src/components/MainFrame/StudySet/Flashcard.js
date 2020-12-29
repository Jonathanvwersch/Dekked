import React from "react";
import "./Flashcard.css";
import * as Icons from "react-icons/md";
import Toolbar from "./Toolbar";
import { MdSave, MdDeleteForever } from "react-icons/md";

function Flashcard({ deleteFlashcard, index, link }) {
  return (
    <div className="flashcardContainer">
      <div className="flashcard">
        <div className="flashcardHeader">
          {!link ? (
            <>
              <span className="p2">{index + 1}</span>
              <Toolbar />
              <MdDeleteForever
                className="icon active delete"
                onClick={deleteFlashcard}
              />
            </>
          ) : (
            <>
              <Toolbar />
              <MdSave className="icon active save" />
            </>
          )}
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
