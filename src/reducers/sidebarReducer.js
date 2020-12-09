// REDUCER -> Describe how your actions transform the state (the setter)
const SideBarReducer = (state = true, action) => {
  switch (action.type) {
    case "SHOWSIDEBAR":
      return !state;
    default:
      return state;
  }
};

export default SideBarReducer;
