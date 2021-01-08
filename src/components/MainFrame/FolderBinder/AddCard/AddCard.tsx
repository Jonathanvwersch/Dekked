import React from "react";
import { MdAdd } from "react-icons/md";
import "./AddCard.css";

interface Props {
  handleClick: () => void;
}

const AddCard: React.FC<Props> = ({ handleClick }) => {
  return (
    <div className="dekked-addCard" onClick={handleClick}>
      <MdAdd className="icon plus" />
    </div>
  );
};

export default AddCard;
