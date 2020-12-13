import React from "react";
import {MdAccountCircle} from "react-icons/md";

// declare global variables
const ACCOUNT = "Account"

export const SettingsData = [
  {
    action: ACCOUNT,
    icon: (
      <div className="icon account">
        <MdAccountCircle/>
      </div>
    ),
  },

];

