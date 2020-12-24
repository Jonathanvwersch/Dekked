import React, { useState } from "react";
import * as Icons from "react-icons/md";
import { ReactComponent as FolderIcon } from "../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";
import "./DeleteBlock.css";
import Portal from "../General/Portal";
import DeleteModal from "../General/DeleteModal";

function DeleteBlock({
  name,
  type,
  iconColour,
  handleDeleteForever,
  handleRestore,
}) {
  console.log(type);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = () => {
    setDeleteModal((prevValue) => !prevValue);
  };

  return (
    <div className="dekked-deleteBlock">
      <div style={{ display: "flex" }}>
        {type === "folder" ? (
          <FolderIcon className={`icon ${type}`} fill={iconColour} />
        ) : type === "binder" ? (
          <BinderIcon className={`icon ${type}`} stroke={iconColour} />
        ) : (
          <StudySetIcon className={`icon ${type}`} stroke={iconColour} />
        )}
        <p className="p2"> {name ? name : "Untitled"}</p>
      </div>
      <div style={{ display: "flex" }}>
        <Icons.MdUndo
          className="icon active restore"
          style={{ marginLeft: "4px" }}
          onClick={handleRestore}
        />
        <Icons.MdDeleteForever
          className="icon active deleteForever"
          style={{ marginLeft: "0px" }}
          onClick={handleDeleteModal}
        />
      </div>
      {deleteModal ? (
        <Portal
          state={deleteModal}
          handleState={handleDeleteModal}
          center={true}
          close={true}
          lightbox={true}
        >
          <DeleteModal
            handleDelete={() => {
              handleDeleteForever();
              handleDeleteModal();
            }}
            handleCancel={handleDeleteModal}
          />
        </Portal>
      ) : null}
    </div>
  );
}

export default DeleteBlock;
