import React from "react";
import * as Icons from "react-icons/md";
import "./Toolbar.css";

function Toolbar({ type }) {
  return (
    <div className="toolbar">
      <div className="switchBlock">
        <div className="icon active blockType">
          <Icons.MdTextFields />
        </div>
        <div className="icon active dropdownArrow">
          <Icons.MdArrowDropDown />
        </div>
      </div>
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
