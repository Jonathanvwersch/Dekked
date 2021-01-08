import React from "react";
import "./Flashcard.css";
import Toolbar from "../Toolbar/Toolbar";
import { MdSave, MdDeleteForever } from "react-icons/md";
import Button from "../../../Buttons/Button/Button";

interface Props {
  deleteFlashcard?: () => void;
  index?: number;
  link?: boolean; // determines whether flashcard is regular or linked i.e. true represents a linked flashcard
}

const Flashcard: React.FC<Props> = ({ deleteFlashcard, index, link }) => {
  return (
    <div className="flashcard">
      <div className="flashcardHeader">
        {index ? <span className="p2">{index}</span> : null}
        <Toolbar />
        {!link ? (
          <MdDeleteForever
            className="icon active delete"
            onClick={deleteFlashcard}
          />
        ) : null}
      </div>
      <div className="flashcardText">
        <div className="flashcardFront">
          <span className="p3 grey">Front</span>
        </div>
        <div className="flashcardBack">
          <span className="p3 grey">Back</span>
        </div>
      </div>
      <div className="flashcardFooter">
        {link ? <Button action="Save" disabled={true} type="primary" /> : null}
      </div>
    </div>
  );
};

export default Flashcard;
