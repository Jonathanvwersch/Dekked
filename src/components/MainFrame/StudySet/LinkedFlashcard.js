import React, { useState } from "react";
import "./LinkedFlashcard.css";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";
import Toolbar from "./Toolbar";
import Button from "../../Buttons/Button";

function LinkedFlashcard() {
  const [position, setPosition] = useState(true);
  const [iconColour, setIconColour] = useState("var(--main-black)");
  return (
    <div
      className="linked-flashcard-container"
      style={{ bottom: position ? "-240px" : "0px" }}
    >
      <div
        onClick={() => setPosition((prevValue) => !prevValue)}
        className="linked-flashcard-tab"
        onMouseOver={() => setIconColour("var(--primary-color)")}
        onMouseOut={() => setIconColour("var(--main-black)")}
      >
        <LogoIcon className="icon active logo" stroke={iconColour} />
      </div>
      <div className="linked-flashcard">
        <Toolbar />
        <div className="linked-flashcard-text">
          <div className="linked-flashcard-front"></div>
          <div className="linked-flashcard-back"></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <Button type="primary" action="Save" />
        </div>
      </div>
    </div>
  );
}

export default LinkedFlashcard;
