import React from "react";
import { MdFormatListNumbered } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { MdTextFields } from "react-icons/md";
import { Icon } from "@iconify/react";
import typeH1 from "@iconify/icons-bi/type-h1";
import typeH2 from "@iconify/icons-bi/type-h2";
import typeH3 from "@iconify/icons-bi/type-h3";

// declare global variables
const BODY = "Body";
const LARGEHEADING = "Large Heading";
const MEDIUMHEADING = "Medium Heading";
const SMALLHEADING = "Small Heading";
const BULLETEDLIST = "Bulleted List";
const NUMBEREDLIST = "Numbered List";

 const TextBlockDataFull = [
  {
    action: BODY,
    icon: <MdTextFields className="icon body" />,
  },

  {
    action: LARGEHEADING,
    icon: <Icon className="icon large-heading" icon={typeH1} />,
  },

  {
    action: MEDIUMHEADING,
    icon: <Icon className="icon medium-heading" icon={typeH2} />,
  },

  {
    action: SMALLHEADING,
    icon: <Icon className="icon small-heading" icon={typeH3} />,
  },

  {
    action: BULLETEDLIST,
    icon: <MdFormatListBulleted className="icon bulleted-list" />,
  },

  {
    action: NUMBEREDLIST,
    icon: <MdFormatListNumbered className="icon numbered-list" />,
  },
];

export default TextBlockDataFull
