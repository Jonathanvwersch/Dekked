import React from "react";
import {MdSettings} from "react-icons/md";
import { Icon, InlineIcon } from '@iconify/react';
import logoutIcon from '@iconify/icons-mdi/logout';


// declare global variables
const SETTINGS = "Settings"
const LOGOUT = "Log out"

export const ProfileData = [
  {
    action: SETTINGS,
    icon: (
      <div className="icon settings">
        <MdSettings/>
      </div>
    ),
  },

  {
    action: LOGOUT,
    icon: (
      <div className="icon logout">
        <Icon icon={logoutIcon} />
      </div>
    ),
  },

];

