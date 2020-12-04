import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const CHILD_STYLE = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vh",
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
      <div onClick={handleState} style={OVERLAY_STYLE}>
        {state ? (
          <div>
            <div style={CHILD_STYLE} />
            <div>{children}</div>
          </div>
        ) : null}
      </div>
    </>,
    document.getElementById("portal")
  );
}

// const childRef = useRef(null);

// const handleClickOutside = (e) => {
//   if (childRef.current.contains(e.target)) {
//     returnhandleState;
//   }
// };

// useEffect(
//   (e) => {
//     document.addEventListener("click", handleClickOutside, true);
//     return () => {
//       document.removeEventListener("click", handleClickOutside, true);
//     };
//   },
//   [childRef]
// );
