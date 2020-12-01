import React, { useState } from "react";
import * as Icons from "react-icons/md";

const AddBlock = ({ onButtonClick }) => {
  return (
    <div onClick={onButtonClick} className="AddBlock">
      <Icons.MdAdd className="icon plus" />
      <p className="p1">Add folder</p>
    </div>
  );
};

export default AddBlock;
