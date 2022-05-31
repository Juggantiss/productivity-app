import { TYPE_UI } from "../actions/ui";

const initialState = {
  mobileOpen: false
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_UI.TOGGLE_MOBILE:
      return {
        ...state,
        mobileOpen: !state.mobileOpen
      };

    default:
      return state;
  }
};
