import React, { useState } from "react";
import "./LinkedFlashcard.css";
import FlashcardTab from "./FlashcardTab";
import Flashcard from "./Flashcard";

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
            width: "100%",
            height: "100%",
            background: "var(--off-beige)",
            borderRadius: "5px",
          }}
        >
          <Flashcard link={true} />
        </div>
      ) : null}
    </>
  );
}

export default LinkedFlashcard;
