import React from "react";
import { MdAdd } from "react-icons/md";
import "./AddCard.css";

function AddCard({handleClick}) {
  return (
    <div id="addCard" onClick={handleClick}>
      <div className="icon active plus">
        <MdAdd size={160} />
      </div>
    </div>
  );
}

export default AddCard;
