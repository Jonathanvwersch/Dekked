import React, { useState } from "react";
import "./LinkedFlashcard.css";
import FlashcardTab from "../Flashcard Tab/FlashcardTab";
import Flashcard from "../Flashcard/Flashcard";

const LinkedFlashcard: React.FC = () => {
  const [linkedFlashcard, setLinkedFlashcard] = useState<boolean>(false);
  const handleFlashcard = () => {
    setLinkedFlashcard((prevState) => !prevState);
  };
  return (
    <div className="linkedFlashcard">
      <FlashcardTab handleClick={handleFlashcard} />
      {linkedFlashcard ? <Flashcard link={true} /> : null}
    </div>
  );
};

export default LinkedFlashcard;
