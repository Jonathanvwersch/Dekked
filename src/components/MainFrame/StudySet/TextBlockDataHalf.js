import React from "react";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";

// declare global variables
const BULLETEDLIST = "Bulleted List";
const NUMBEREDLIST = "Numbered List";

 const TextBlockDataHalf = [
  {
    action: BULLETEDLIST,
    icon: <MdFormatListBulleted className="icon bulletedList" />,
  },

  {
    action: NUMBEREDLIST,
    icon: <MdFormatListNumbered className="icon numberedList" />,
  },
];

export default TextBlockDataHalf
