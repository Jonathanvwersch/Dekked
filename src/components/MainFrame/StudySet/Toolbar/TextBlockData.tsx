import React from "react";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdTextFields } from "react-icons/md";
import { Icon } from "@iconify/react";
import typeH1 from "@iconify/icons-bi/type-h1";
import typeH2 from "@iconify/icons-bi/type-h2";
import typeH3 from "@iconify/icons-bi/type-h3";
import { v4 as uuidv4 } from "uuid";

// declare global variables
const BODY:string = "Body";
const LARGEHEADING:string = "Large Heading";
const MEDIUMHEADING:string = "Medium Heading";
const SMALLHEADING:string = "Small Heading";
const BULLETEDLIST:string = "Bulleted List";
const NUMBEREDLIST:string = "Numbered List";


export const TextBlockDataHalf = [
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

export const TextBlockDataFull = [
  {
    action: BODY,
    icon: <MdTextFields className="icon body" />,
    id: uuidv4(),
  },

  {
    action: LARGEHEADING,
    icon: <Icon className="icon largeHeading" icon={typeH1} />,
    id: uuidv4(),
  },

  {
    action: MEDIUMHEADING,
    icon: <Icon className="icon mediumHeading" icon={typeH2} />,
    id: uuidv4(),
  },

  {
    action: SMALLHEADING,
    icon: <Icon className="icon smallHeading" icon={typeH3} />,
    id: uuidv4(),
  },

  {
    action: BULLETEDLIST,
    icon: <MdFormatListBulleted className="icon bulleted-list" />,
    id: uuidv4(),
  },

  {
    action: NUMBEREDLIST,
    icon: <MdFormatListNumbered className="icon numbered-list" />,
    id: uuidv4(),
  },
];

