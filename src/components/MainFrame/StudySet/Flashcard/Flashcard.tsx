import React from "react";
import "./Flashcard.css";
import Toolbar from "../Toolbar/Toolbar";
import { MdSave, MdDeleteForever } from "react-icons/md";

interface Props {
  deleteFlashcard?: () => void;
  index?: number;
  link?: boolean; // determines whether flashcard is regular of linked i.e. true represents a linked flashcard
}

const Flashcard:React.FC<Props> = ({ deleteFlashcard, index, link }) => {
  return (
    <div className="flashcardContainer">
      <div className="flashcard">
        <div className="flashcardHeader">
          {!link ? (
            <>
              <span className="p2">{index ? index + 1 : null}</span>
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
