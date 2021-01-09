import React, { useState } from "react";
import { BlockPicker } from "react-color";
import Portal from "../../General/Portal/Portal";
import "./ColourPicker.css";

// Colour picker taken from https://casesandberg.github.io/react-color/
interface Props {
  iconColour: string;
  setIconColour: (colour: any) => void;
  colourPicker: boolean;
  handleColourPicker: () => void;
  position: {
    left: number;
    top: number;
  };
}

const ColourPicker: React.FC<Props> = ({
  iconColour,
  setIconColour,
  colourPicker,
  handleColourPicker,
  position,
}) => {
  const [colour, setColour] = useState({
    background: iconColour,
  });

  const handleChange = (colour: any) => {
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

  return colourPicker ? (
    <Portal state={colourPicker} handleState={handleColourPicker}>
      <div className="colourPicker" style={{...position}}>
        <BlockPicker
          color={colour.background}
          onChange={handleChange}
          triangle="hide"
          colors={defaultColors}
        />
      </div>
    </Portal>
  ) : null;
};

export default ColourPicker;
