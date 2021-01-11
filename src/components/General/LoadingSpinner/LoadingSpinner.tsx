import React from "react";
import { ReactComponent as LogoIcon } from "../../../custom-icons/logo.svg";
import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  loadingText?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  loadingText = "Loading...",
}) => {
  return (
    <div className="loadingSpinner">
      <LogoIcon className="icon logo" stroke="#00A7BE" />
      <span className="p2 bold">{loadingText}</span>
    </div>
  );
};
