import React from "react";
import {MdSettings} from "react-icons/md";
import { Icon } from '@iconify/react';
import logoutIcon from '@iconify/icons-mdi/logout';
import { v4 as uuidv4 } from "uuid";


// declare global variables
const SETTINGS = "Settings"
const LOGOUT = "Log out"

export const ProfileData = [
  {
    action: SETTINGS,
    icon: (
        <MdSettings className="icon settings"/>
    ),
    id:uuidv4()
  },

  {
    action: LOGOUT,
    icon: (
        <Icon icon={logoutIcon} className="icon logout"/>
    ),
    id:uuidv4()
  },

];

