/* Overlay container used to render all popovers and modals */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import "./Portal.css";

interface Props {
  children: JSX.Element;
  state: boolean;
  handleState: () => void;
  lightbox?: boolean;
  center?: boolean;
  close?: boolean | null;
}

const Portal: React.FC<Props> = ({
  children,
  state,
  handleState,
  lightbox = false, // set state of lightbox
  center = false, // center=true will center child item on portal
  close = false, // close=true will show close icon in top right of child item
}) => {
  function handleEscape(e: any) {
    handleState();
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
  }, []);
  return createPortal(
    <>
      {state ? (
        <div
          className={`${!center ? "dekked-overlay" : "dekked-overlay center"}`}
        >
          <div
            className={`${!lightbox ? "lightBoxOff" : "lightBoxOn"}`}
            onClick={handleState}
          ></div>
          <div
            id="portal-overlay"
            className={`${!close ? "childStyle" : "childStyle closed"}`}
          >
            {children}
            {close ? (
              <MdClose onClick={handleState} className="icon active close" />
            ) : null}
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("dekked-overlay-container")!
  );
};

export default Portal;
