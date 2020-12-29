import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Toolbar.css";
import TextBlockDataFull from "./TextBlockDataFull";
import TextBlockDataHalf from "./TextBlockDataHalf.js";
import Portal from "../../../components/General/Portal";
import Block from "../../General/Block";

function Toolbar({ type }) {
  const [textBlockSelector, setTextBlockSelector] = useState(false);
  const [coords, setCoords] = useState({}); // Set mouse coordinates

  return (
    <div className="toolbar">
      <div
        id="switchBlock"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY,
          });
          setTextBlockSelector(true);
        }}
      >
        <Icons.MdTextFields className="icon active blockType" />
        <Icons.MdArrowDropDown className="icon active dropdownArrow" />
      </div>
      {textBlockSelector ? (
        <Portal
          state={textBlockSelector}
          handleState={() => setTextBlockSelector(false)}
        >
          <div
            style={{
              position: "absolute",
              transform: "translate(0px, 16px)",
              ...coords,
            }}
            className="dropdownMenu textBlockSelector"
            onClick={() => setTextBlockSelector(false)}
          >
            {type === "full"
              ? TextBlockDataFull.map((item, index) => {
                  return <Block item={item} key={`${item} Block ${index}`} />;
                })
              : TextBlockDataHalf.map((item, index) => {
                  return <Block item={item} key={`${item} Block ${index}`} />;
                })}
          </div>
        </Portal>
      ) : null}

      <Icons.MdFormatBold className="icon active bold" />
      <Icons.MdFormatUnderlined className="icon active underline" />
      <Icons.MdFormatItalic className="icon active italics" />
      {type === "full" ? (
        <>
          <span id="divider"></span>
          <Icons.MdFormatAlignLeft className="icon active alignLeft" />
          <Icons.MdFormatAlignCenter className="icon active alignCenter" />
          <Icons.MdFormatAlignRight className="icon active alignRight" />
          <Icons.MdFormatAlignJustify className="icon active alignJustify" />
        </>
      ) : null}
    </div>
  );
}

export default Toolbar;
