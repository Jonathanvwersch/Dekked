import React from "react";
import "./Card.css";
import { ReactComponent as BinderIcon } from "../../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../../custom-icons/studyset.svg";

function Card({ name, type, iconColour, bottomText, clicked, handleClick}) {
  let date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div className={clicked ? "dekked-card clicked" : "dekked-card"} role="button" onClick={handleClick}>
      <div id="cardThumbnail"></div>
      <div id="cardDescription">
        <p className="p2 cardName">{name} </p>
        <div id="cardDate">
          {type ? (
            type === "binder" ? (
              <BinderIcon className={`icon ${type}`} stroke={iconColour} />
            ) : (
              <StudySetIcon className={`icon ${type}`} stroke={iconColour} />
            )
          ) : null}
          <p className="p3">
            {bottomText
              ? bottomText
              : `Created ${date.toLocaleString("en-US", options)}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
