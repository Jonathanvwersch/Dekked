import React from "react";
import * as Icons from "react-icons/md";
import { ReactComponent as BinderIcon } from "../../custom-icons/binder.svg";
import { ReactComponent as StudySetIcon } from "../../custom-icons/studyset.svg";

// declare global variables
const ADDBINDER = "Add binder"
const ADDSTUDYSET = "Add study set"
const ICONRECOLOUR = "Icon colour"
const RENAME = "Rename"
const DELETE = "Delete"

export const FolderData = [
  {
    action: ADDBINDER,
    icon: (
      <div className="icon binder">
        <BinderIcon stroke="#2C2C31" />
      </div>
    ),
  },

  {
    action: ICONRECOLOUR,
    icon: (
      <div className="icon colourChange">
        <Icons.MdFormatPaint />
      </div>
    ),
  },
  {
    action: RENAME,
    icon: (
      <div className="icon rename">
        <Icons.MdModeEdit />
      </div>
    ),
  },
  {
    action: DELETE,
    icon: (
      <div className="icon delete">
        <Icons.MdDeleteForever />
      </div>
    ),
  },
];

export const BinderData = [
  {
    action: ADDSTUDYSET,
    icon: (
      <div className="icon studySet">
        <StudySetIcon stroke="#2C2C31" />
      </div>
    ),
  },

  {
    action: ICONRECOLOUR,
    icon: (
      <div className="icon colourChange">
        <Icons.MdFormatPaint />
      </div>
    ),
  },
  {
    action: RENAME,
    icon: (
      <div className="icon rename">
        <Icons.MdModeEdit />
      </div>
    ),
  },
  {
    action: DELETE,
    icon: (
      <div className="icon delete">
        <Icons.MdDeleteForever />
      </div>
    ),
  },
];

export const StudySetData = [
  {
    action: ICONRECOLOUR,
    icon: (
      <div className="icon colourChange">
        <Icons.MdFormatPaint />
      </div>
    ),
  },
  {
    action: RENAME,
    icon: (
      <div className="icon rename">
        <Icons.MdModeEdit />
      </div>
    ),
  },
  {
    action: DELETE,
    icon: (
      <div className="icon delete">
        <Icons.MdDeleteForever />
      </div>
    ),
  },
];
