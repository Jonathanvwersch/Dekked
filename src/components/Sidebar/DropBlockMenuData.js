import React from "react";
import * as Icons from "react-icons/md";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

// declare global variables
const ADDBINDER = "Add binder";
const ADDSTUDYSET = "Add study set";
const ICONRECOLOUR = "Icon colour";
const RENAME = "Rename";
const DELETE = "Delete";

export const FolderData = [
  {
    action: ADDBINDER,
    icon: <BinderIcon stroke="#2C2C31" className="icon binder" />,
  },

  {
    action: ICONRECOLOUR,
    icon: <Icons.MdFormatPaint className="icon colourChange" />,
  },
  {
    action: RENAME,
    icon: <Icons.MdModeEdit className="icon rename" />,
  },
  {
    action: DELETE,
    icon: <Icons.MdDelete className="icon delete" />,
  },
];

export const BinderData = [
  {
    action: ADDSTUDYSET,
    icon: <StudySetIcon className="icon studySet" stroke="#2C2C31" />,
  },

  {
    action: ICONRECOLOUR,
    icon: <Icons.MdFormatPaint className="icon colourChange" />,
  },
  {
    action: RENAME,
    icon: <Icons.MdModeEdit className="icon rename" />,
  },
  {
    action: DELETE,
    icon: <Icons.MdDelete className="icon delete" />,
  },
];

export const StudySetData = [
  {
    action: ICONRECOLOUR,
    icon: <Icons.MdFormatPaint className="icon colourChange" />,
  },
  {
    action: RENAME,
    icon: <Icons.MdModeEdit className="icon rename" />,
  },
  {
    action: DELETE,
    icon: <Icons.MdDelete className="icon delete" />,
  },
];
