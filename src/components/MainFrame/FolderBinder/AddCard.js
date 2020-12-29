import React from "react";
import { MdAdd } from "react-icons/md";
import "./AddCard.css";

function AddCard({handleClick}) {
  return (
    <div id="dekked-addCard" onClick={handleClick}>
        <MdAdd className="icon plus"  />
    </div>
  );
}

export default AddCard;
