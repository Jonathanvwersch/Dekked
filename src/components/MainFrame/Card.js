import React from "react";
import "./Card.css";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

function Card({ name, type, iconColour }) {
  console.log(iconColour);

  return (
    <div id="card">
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
          <p className="p3">Created</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
