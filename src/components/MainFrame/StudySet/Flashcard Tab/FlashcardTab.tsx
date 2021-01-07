import React, { useState } from "react";
import "./FlashcardTab.css";
import { ReactComponent as LogoIcon } from "../../../../custom-icons/logo.svg";

interface Props {
  handleClick: () => any;
}

const FlashcardTab:React.FC<Props> = ({ handleClick }) => {
  const [iconColour, setIconColour] = useState<string>("var(--main-black)");
  return (
    <>
      <div
        id="flashcardTab"
        onClick={handleClick}
        onMouseOver={() => setIconColour("var(--primary-color)")}
        onMouseOut={() => setIconColour("var(--main-black)")}
      >
        <LogoIcon className="icon active logo" stroke={iconColour} />
      </div>
    </>
  );
}

export default FlashcardTab;
