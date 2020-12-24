import React from "react";
import Button from "../Buttons/Button";
import "./DeleteModal.css";

function DeleteModal({ handleDelete }) {
  return (
    <div className="dekked-deleteModalContainer">
      <div className="dekked-deleteModal">
        <h3>Are you sure?</h3>
        <p className="p1">This action cannot be undone.</p>
        <div id="deleteModalButtons">
          <Button type="secondary" action="Cancel" />
          <Button type="tertiary" action="Delete" handleClick={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
