import React, { useState } from "react";
import Button from "../../Buttons/Button";
import Card from "../FolderBinder/Card";
import "./StudySelector.css";

function StudySelector() {
  const [CardOneState, setCardOneState] = useState(false);
  const [CardTwoState, setCardTwoState] = useState(false);
  const [buttonState, setButtonState] = useState(true);
  const handleCardOneClick = () => {
    setCardOneState(true);
    setButtonState(false);
    if (CardTwoState) setCardTwoState(false);
  };
  const handleCardTwoClick = () => {
    setCardTwoState(true);
    setButtonState(false);
    if (CardOneState) setCardOneState(false);
  };
  return (
    <div id="dekked-studySelector">
      <h3>Choose your study mode</h3>
      <div id="card-formatting">
        <Card
          clicked={CardOneState}
          name="Spaced Repetition"
          bottomText="Interval studying"
          handleClick={handleCardOneClick}
        />
        <Card
          clicked={CardTwoState}
          name="Free"
          bottomText="Linear studying"
          handleClick={handleCardTwoClick}
        />
      </div>
      <Button disabled={buttonState} type="primary" action="Study" />
    </div>
  );
}

export default StudySelector;
