import React, { useState } from "react";
import Button from "../../Buttons/Button/Button";
import Card from "../FolderBinder/Card";
import "./StudySelector.css";

const StudySelector:React.FC = () => {
  const [CardOneState, setCardOneState] = useState<boolean>(false);
  const [CardTwoState, setCardTwoState] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<boolean>(true);

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
