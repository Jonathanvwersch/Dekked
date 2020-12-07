import React from "react";
import * as Icons from "react-icons/md";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";

export const AddBinderData = [
  {
    action: "Add binder",
    icon: (
      <div className="icon binder">
        <BinderIcon stroke="#2C2C31" />
      </div>
    ),
  },

  {
    action: "Icon colour",
    icon: (
      <div className="icon colourChange">
        <Icons.MdFormatPaint />
      </div>
    ),
  },
  {
    action: "Rename",
    icon: (
      <div className="icon rename">
        <Icons.MdModeEdit />
      </div>
    ),
  },
  {
    action: "Delete",
    icon: (
      <div className="icon delete">
        <Icons.MdDeleteForever />
      </div>
    ),
  },
];
