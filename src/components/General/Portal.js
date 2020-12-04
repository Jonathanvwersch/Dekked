import React from "react";
import { createPortal } from "react-dom";

const CHILD_STYLE = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
};

const OVERLAY_STYLE = {
  pointerEvents: "auto",
  position: "relative",
  zIndex: 0,
};

export default function Portal({ children, state, handleState }) {
  return createPortal(
    <>
      {state ? (
        <div style={OVERLAY_STYLE}>
          <div>
            <div style={CHILD_STYLE} onClick={handleState}></div>
            <div>{children}</div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("dekked-overlay-container")
  );
}
