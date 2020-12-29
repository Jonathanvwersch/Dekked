import React, { useState } from "react";
import "./LinkedFlashcard.css";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";
import Toolbar from "./Toolbar";
import Button from "../../Buttons/Button";

function LinkedFlashcard({ sidebar }) {
  const [position, setPosition] = useState(true);
  const [iconColour, setIconColour] = useState("var(--main-black)");
  return (
    <div
      className="linkedFlashcardContainer"
      style={{
        bottom: position ? "-240px" : "0px",
      }}
    >
      <div
        onClick={() => setPosition((prevValue) => !prevValue)}
        className="linkedFlashcardTab"
        onMouseOver={() => setIconColour("var(--primary-color)")}
        onMouseOut={() => setIconColour("var(--main-black)")}
      >
        <LogoIcon className="icon active logo" stroke={iconColour} />
      </div>
      <div className="linkedFlashcard">
        <Toolbar />
        <div className="linkedFlashcardText">
          <div className="linkedFlashcardFront">
            <span className="p1">Front</span>
          </div>
          <div className="linkedFlashcardBack">
            <span className="p1">Back</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Button disabled type="primary" action="Save" />
        </div>
      </div>
    </div>
  );
}

export default LinkedFlashcard;
