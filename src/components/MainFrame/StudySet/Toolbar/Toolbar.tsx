import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Toolbar.css";
import {TextBlockDataFull, TextBlockDataHalf} from "./TextBlockData";
import Portal from "../../../General/Portal/Portal";
import Block from "../../../General/Block/Block";
interface Props {
  type?:string;  
}

const Toolbar:React.FC<Props> = ({ type }) => {

  const [textBlockSelector, setTextBlockSelector] = useState<boolean>(false);
  const [coords, setCoords] = useState<{left:number, top:number} | {}>({}); // Set mouse coordinates

  return (
    <div className={`toolbar ${type==="full" ? null : "half"}`}>
      <div
        id="switchBlock"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          const node = e.target as any;
          const rect = node.getBoundingClientRect() as DOMRect;
          setCoords({
            left: rect.x + rect.width / 2,
            top: rect.y,
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
                  return <Block item={item} key={item.id} />;
                })
              : TextBlockDataHalf.map((item, index) => {
                  return <Block item={item} key={item.id} />;
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
