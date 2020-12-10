/* Overlay container used to render all popovers and modals */

import React from "react";
import { createPortal } from "react-dom";

const CHILD_STYLE = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
};

const CHILD_STYLE_LIGHTBOX = {
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
};

const OVERLAY_STYLE = {
  pointerEvents: "auto",
  position: "relative",
  zIndex: 0,
};

const OVERLAY_STYLE_CENTER = {
  pointerEvents: "auto",
  position: "relative",
  zIndex: 0,
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
}) {
  return createPortal(
    <>
      {state ? (
        <div style={center ? OVERLAY_STYLE_CENTER : OVERLAY_STYLE}>
          <div>
            <div
              style={!lightbox ? CHILD_STYLE : CHILD_STYLE_LIGHTBOX}
              onClick={handleState}
            ></div>
            <div style={center ? CENTER : null}>{children}</div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("dekked-overlay-container")
  );
}
