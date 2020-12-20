import React from "react";
import "./PulloutTab.css";
import { ReactComponent as LogoIcon } from "../../custom-icons/logo.svg";

function PulloutTab() {
  return (
    <div className="pulloutTab">
      <div className="icon active logo">
        <LogoIcon />
      </div>
    </div>
  );
}

export default PulloutTab;
