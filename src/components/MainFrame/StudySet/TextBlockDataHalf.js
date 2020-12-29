import React from "react";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

// declare global variables
const BULLETEDLIST = "Bulleted List";
const NUMBEREDLIST = "Numbered List";

const TextBlockDataHalf = [
  {
    action: BULLETEDLIST,
    icon: <MdFormatListBulleted className="icon bulletedList" />,
    id: uuidv4(),
  },

  {
    action: NUMBEREDLIST,
    icon: <MdFormatListNumbered className="icon numberedList" />,
    id: uuidv4(),
  },
];

export default TextBlockDataHalf;
