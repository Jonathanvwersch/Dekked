import React from "react";
import "./Card.css";
import { ReactComponent as BinderIcon } from "../../../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../../../custom-icons/studyset.svg";

interface Props {
  name: string;
  type?: string;
  iconColour?: string;
  bottomText?: string;
  clicked?: boolean;
  handleClick?: () => void;
}

const Card: React.FC<Props> = ({
  name,
  type,
  iconColour,
  bottomText,
  clicked,
  handleClick,
}) => {
  let date: Date = new Date();
  const dateOptions: object = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <div
      className={clicked ? "dekked-card clicked" : "dekked-card"}
      role="button"
      onClick={handleClick}
    >
      <div className="cardThumbnail"></div>
      <div className="cardDescription">
        <span className="p2 cardName">{name} </span>
        <div className="cardDate">
          {type ? (
            type === "binder" ? (
              <BinderIcon className={`icon ${type}`} stroke={iconColour} />
            ) : (
              <StudySetIcon className={`icon ${type}`} stroke={iconColour} />
            )
          ) : null}
          <span className="p3 grey">
            {bottomText
              ? bottomText
              : `Created ${date.toLocaleString("en-US", dateOptions)}`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
