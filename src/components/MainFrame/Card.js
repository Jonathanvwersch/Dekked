import React from "react";
import "./Card.css";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

function Card({ name, type, iconColour }) {
  let date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div id="card" role="button">
      <div id="card-thumbnail"></div>
      <div id="card-description">
        <div id="card-name">
          <p className="p2">{name}</p>
        </div>
        <div id="card-date">
          <div className={`icon ${type}`}>
            {type === "binder" ? (
              <BinderIcon stroke={iconColour} />
            ) : (
              <StudySetIcon stroke={iconColour} />
            )}
          </div>
          <p className="p3">Created {date.toLocaleString("en-US", options)}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
