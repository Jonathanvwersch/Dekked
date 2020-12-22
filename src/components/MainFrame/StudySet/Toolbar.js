import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Toolbar.css";
import TextBlockData from "./TextBlockData";
import Portal from "../../../components/General/Portal";
import Block from "../../General/Block";

function Toolbar({ type }) {
  const [textBlockSelector, setTextBlockSelector] = useState(false);
  const [coords, setCoords] = useState({}); // Set mouse coordinates
  console.log({ coords });

  return (
    <div className="toolbar">
      <div
        className="switchBlock"
        onClick={(e) => {
          const rect = e.target.getBoundingClientRect();
          setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y + window.scrollY,
          });
          setTextBlockSelector(true);
        }}
      >
        <div className="icon active blockType">
          <Icons.MdTextFields />
        </div>
        <div className="icon active dropdownArrow">
          <Icons.MdArrowDropDown />
        </div>
      </div>
      {textBlockSelector ? (
        <Portal
          state={textBlockSelector}
          handleState={() => setTextBlockSelector(false)}
        >
          <div
            style={{
              position: "absolute",
              transform: "translate(0px, 15px)",
              ...coords,
            }}
            className="dropdownMenu textBlockSelector"
            onClick={() => setTextBlockSelector(false)}
          >
            {TextBlockData.map((item, index) => {
              return <Block item={item} key={`${item} Block ${index}`} />;
            })}
          </div>
        </Portal>
      ) : null}
      <div className="icon active bold">
        <Icons.MdFormatBold />
      </div>
      <div className="icon active underline">
        <Icons.MdFormatUnderlined />
      </div>
      <div className="icon active italics">
        <Icons.MdFormatItalic />
      </div>
      {type === "full" ? (
        <>
          <span id="divider"></span>
          <div className="icon active alignLeft">
            <Icons.MdFormatAlignLeft />
          </div>
          <div className="icon active alignCenter">
            <Icons.MdFormatAlignCenter />
          </div>
          <div className="icon active alignRight">
            <Icons.MdFormatAlignRight />
          </div>
          <div className="icon active alignJustify">
            <Icons.MdFormatAlignJustify />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Toolbar;
