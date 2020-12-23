import React from "react";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";

// declare global variables
const BULLETEDLIST = "Bulleted List";
const NUMBEREDLIST = "Numbered List";

 const TextBlockDataHalf = [
  {
    action: BULLETEDLIST,
    icon: <MdFormatListBulleted className="icon bulleted-list" />,
  },

  {
    action: NUMBEREDLIST,
    icon: <MdFormatListNumbered className="icon numbered-list" />,
  },
];

export default TextBlockDataHalf
