import React from "react";
import { MdAdd } from "react-icons/md";
import "./AddCard.css";

function AddCard({handleClick}) {
  return (
    <div id="dekked-addCard" onClick={handleClick}>
        <MdAdd className="icon active plus" size={160} />
    </div>
  );
}

export default AddCard;
