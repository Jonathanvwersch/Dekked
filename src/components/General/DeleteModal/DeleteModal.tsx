import React from "react";
import Button from "../../Buttons/Button/Button";
import Portal from "../Portal/Portal";
import "./DeleteModal.css";

interface Props {
  handleDelete: () => void;
  handleCancel: () => void;
  handleDeleteModal: () => void;
  deleteModal: boolean;
}

const DeleteModal: React.FC<Props> = ({
  handleDelete,
  handleCancel,
  handleDeleteModal,
  deleteModal,
}) => {
  return deleteModal ? (
    <Portal
      state={deleteModal}
      handleState={handleDeleteModal}
      center={true}
      close={true}
      lightbox={true}
    >
      <div className="dekked-deleteModal">
        <h3>Are you sure?</h3>
        <span className="p1">This action cannot be undone.</span>
        <div className="deleteModalButtons">
          <Button type="secondary" action="Cancel" handleClick={handleCancel} />
          <Button type="tertiary" action="Delete" handleClick={handleDelete} />
        </div>
      </div>
    </Portal>
  ) : null;
};

export default DeleteModal;
