/* Overlay container used to render all popovers and modals */

import React from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "./Portal.css";

const CHILD_STYLE = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
};

const CHILD_STYLE_LIGHTBOX = {
  position: "absolute",
  inset: "0px",
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
};

const OVERLAY_STYLE_CENTER = {
  pointerEvents: "auto",
  position: "fixed ",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const CENTER = {
  position: "relative",
};

export default function Portal({
  children,
  state,
  handleState,
  lightbox,
  center,
  level,
  close,
}) {
  return createPortal(
    <>
      {state ? (
        <div
          className="portal"
          style={{
            pointerEvents: "auto",
            position: "relative",
            zIndex: level ? level : "0",
          }}
        >
          <div style={center && OVERLAY_STYLE_CENTER}>
            <div
              style={!lightbox ? CHILD_STYLE : CHILD_STYLE_LIGHTBOX}
              onClick={handleState}
            ></div>
            <div style={center ? CENTER : null}>
              {children}
              {close ? (
                <div onClick={handleState} className="icon active close">
                  <MdClose />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("dekked-overlay-container")
  );
}
