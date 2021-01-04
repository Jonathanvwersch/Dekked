import React from "react";
import {MdAccountCircle} from "react-icons/md";
import { v4 as uuidv4 } from "uuid";


// declare global variables
const ACCOUNT:string = "Account"

export const SettingsData = [
  {
    action: ACCOUNT,
    icon: (
        <MdAccountCircle className="icon account"/>
    ),
    id: uuidv4()
  },

];

