import React, { useState } from "react";
import "./StudyCard.css";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";

function StudyCard() {
  const [iconColour, setIconColour] = useState("var(--main-black)");

  return (
    <div className="dekked-studyCardContainer">
      <div className="dekked-studyCard"></div>
      <LogoIcon
        className="icon active logo"
        stroke={iconColour}
        onMouseOver={() => setIconColour("var(--primary-color)")}
        onMouseOut={() => setIconColour("var(--main-black)")}
      />
    </div>
  );
}

export default StudyCard;
