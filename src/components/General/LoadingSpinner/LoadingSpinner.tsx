import React, { useState, useEffect } from "react";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";
import "./LoadingSpinner.css";

interface LoadingSpinnerProps {}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({}) => {
  return (
    <div id="loadingScreen">
      <LogoIcon className="icon logo" stroke="#00A7BE" />
    </div>
  );
};
