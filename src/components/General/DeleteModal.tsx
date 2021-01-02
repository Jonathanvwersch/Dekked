import React from "react";
import Button from "../Buttons/Button";
import "./DeleteModal.css";

interface Props {
  handleDelete: () => void;
  handleCancel: () => void;
}

const DeleteModal: React.FC<Props> = ({ handleDelete, handleCancel }) => {
  return (
    <div className="dekked-deleteModalContainer">
      <div className="dekked-deleteModal">
        <h3>Are you sure?</h3>
        <span className="p1">This action cannot be undone.</span>
        <div id="deleteModalButtons">
          <Button type="secondary" action="Cancel" handleClick={handleCancel} />
          <Button type="tertiary" action="Delete" handleClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
