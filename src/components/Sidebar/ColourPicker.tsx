import React, { useState } from "react";
import { BlockPicker } from "react-color";
import "./ColourPicker.css";

// Colour picker take from https://casesandberg.github.io/react-color/

interface Props {
  iconColour:string;
  setIconColour: (colour:any) => void;
}

const ColourPicker:React.FC<Props>= ({ iconColour, setIconColour }) => {
  const [colour, setColour] = useState({
    background: iconColour,
  });

  const handleChange = (colour:any) => {
    setColour({ background: colour });
    setIconColour(colour.hex);
  };

  const defaultColors = [
    "#2C2C31",
    "#00B6CE",
    "#E81123",
    "#F7630D",
    "#FABD14",
    "#0F893E",
    "#3971D1",
    "#4B0082",
    "#AC008C",
    "#84939A",
  ];

  return (
      <BlockPicker
        color={colour.background}
        onChange={handleChange}
        triangle="hide"
        colors={defaultColors}
      />
  );
};

export default ColourPicker;
