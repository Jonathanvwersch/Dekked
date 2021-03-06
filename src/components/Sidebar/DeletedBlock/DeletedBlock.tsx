import React, { useState } from "react";
import * as Icons from "react-icons/md";
import { ReactComponent as FolderIcon } from "../../../custom-icons/folder.svg";
import { ReactComponent as BinderIcon } from "../../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../../custom-icons/studyset.svg";
import "./DeletedBlock.css";
import Portal from "../../General/Portal/Portal";
import DeleteModal from "../../General/DeleteModal/DeleteModal";

interface Props {
  name: string;
  type: string;
  iconColour: string;
  handleDeleteForever: () => void;
  handleRestore: () => void;
}

const DeletedBlock: React.FC<Props> = ({
  name,
  type,
  iconColour,
  handleDeleteForever,
  handleRestore,
}) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);

  const handleDeleteModal = () => {
    setDeleteModal((prevValue) => !prevValue);
  };

  return (
    <>
      <div className="dekked-deletedBlock p2" role="button">
        <div style={{ display: "flex" }}>
          {type === "folder" ? (
            <FolderIcon className={`icon ${type}`} fill={iconColour} />
          ) : type === "binder" ? (
            <BinderIcon className={`icon ${type}`} stroke={iconColour} />
          ) : (
            <StudySetIcon className={`icon ${type}`} stroke={iconColour} />
          )}
          <span>{name ? name : "Untitled"}</span>
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
      </div>
      <DeleteModal
        handleDelete={() => {
          handleDeleteForever();
          handleDeleteModal();
        }}
        handleCancel={handleDeleteModal}
        handleDeleteModal={handleDeleteModal}
        deleteModal={deleteModal}
      />
    </>
  );
};

export default DeletedBlock;
