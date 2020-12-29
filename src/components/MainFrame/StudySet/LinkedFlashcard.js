import React, { useState } from "react";
import "./LinkedFlashcard.css";
import Toolbar from "./Toolbar";
import { MdSave } from "react-icons/md";
import FlashcardTab from "./FlashcardTab";

function LinkedFlashcard() {
  const [linkedFlashcard, setLinkedFlashcard] = useState(false);
  const handleFlashcard = () => {
    setLinkedFlashcard((prevState) => !prevState);
  };
  return (
    <>
      <FlashcardTab handleClick={handleFlashcard} />
      {linkedFlashcard ? (
        <div
          style={{
            padding: "16px 24px",
            width: "100%",
            height: "100%",
            background: "var(--off-beige)",
            borderRadius: "5px",
          }}
        >
          <div className="flashcard">
            <div className="flashcardHeader">
              <Toolbar />
              <MdSave className="icon active save" />
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
      ) : null}
    </>
  );
}

export default LinkedFlashcard;
