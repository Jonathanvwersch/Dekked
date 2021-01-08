import React, { useState } from "react";
import * as Icons from "react-icons/md";
import "./Toolbar.css";
import { TextBlockDataFull, TextBlockDataHalf } from "./TextBlockData";
import Portal from "../../../General/Portal/Portal";
import { Scroller } from "../../../General/Scroller/Scroller";
interface Props {
  type?: string;
}

const Toolbar: React.FC<Props> = ({ type }) => {
  const [textBlockSelector, setTextBlockSelector] = useState<boolean>(false);
  const [coords, setCoords] = useState<{ left: number; top: number } | {}>({});

  const positionModal = (e: any) => {
    const node = e.target as any;
    const rect = node.getBoundingClientRect() as DOMRect;
    setCoords({
      left: rect.x + rect.width / 2,
      top: rect.y,
    });
    setTextBlockSelector(true);
  };

  return (
    <div className={`toolbar ${type}`}>
      <div
        className="switchBlock"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          positionModal(e);
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
            style={{ ...coords }}
            className="textBlockSelector"
            onClick={() => setTextBlockSelector(false)}
          >
            {type === "full" ? (
              <Scroller Data={TextBlockDataFull} />
            ) : (
              <Scroller Data={TextBlockDataHalf} />
            )}
          </div>
        </Portal>
      ) : null}

      <Icons.MdFormatBold className="icon active bold" />
      <Icons.MdFormatUnderlined className="icon active underline" />
      <Icons.MdFormatItalic className="icon active italics" />
      {type === "full" ? (
        <>
          <span className="divider"></span>
          <Icons.MdFormatAlignLeft className="icon active alignLeft" />
          <Icons.MdFormatAlignCenter className="icon active alignCenter" />
          <Icons.MdFormatAlignRight className="icon active alignRight" />
          <Icons.MdFormatAlignJustify className="icon active alignJustify" />
        </>
      ) : null}
    </div>
  );
};

export default Toolbar;
