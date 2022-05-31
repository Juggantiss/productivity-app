export const TYPE_UI = {
  TOGGLE_MOBILE: "toggle_mobile"
};

export const handleDrawerToggleMobile = (payload) => {
  return {
    type: TYPE_UI.TOGGLE_MOBILE,
    payload
  };
};
