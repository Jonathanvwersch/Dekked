import { combineReducers } from "redux";
import SideBarReducer from "./sidebarReducer";

const allReducers = combineReducers({
  SideBarReducer: SideBarReducer,
});

export default allReducers;
