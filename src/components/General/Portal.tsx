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
} as React.CSSProperties;

const CHILD_STYLE_LIGHTBOX = {
  position: "absolute",
  inset: "0px",
  background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
} as React.CSSProperties;

const OVERLAY_STYLE_CENTER: React.CSSProperties = {
  pointerEvents: "auto",
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
} as React.CSSProperties;

const OVERLAY_STYLE: React.CSSProperties = {
}

const CENTER = {
  position: "relative",
} as React.CSSProperties;

const NOT_CENTERED = {
} as React.CSSProperties;


interface Props {
  children:JSX.Element;
  state:any;
  handleState: () => void;
  lightbox?: boolean;
  center?: boolean;
  close?:boolean | null;
} 

const Portal: React.FC<Props> = ({
  children,
  state,
  handleState,
  lightbox = false,
  center = false,
  close = false,
}) => {
  return createPortal(
    <>
      {state ? (
        <div
          className="dekked-overlay"
          style={{
            pointerEvents: "auto",
            position: "relative",
          }}
         
        >
          <div style={center ? OVERLAY_STYLE_CENTER : OVERLAY_STYLE}>
            <div
              style={!lightbox ? CHILD_STYLE : CHILD_STYLE_LIGHTBOX}
              onClick={handleState}
            ></div>
            <div style={center ? CENTER : NOT_CENTERED} id="portal-overlay">
              {children}
              {close ? (
                <MdClose onClick={handleState} className="icon active close" />
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("dekked-overlay-container")!
  );
}

export default Portal;
