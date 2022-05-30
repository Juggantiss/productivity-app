import { TYPE_TODO } from "../actions/todo";

const initialState = {
  todo: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_TODO.ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, action.payload]
      };
    case TYPE_TODO.TOGGLE_RESET:
      return initialState;

    default:
      return state;
  }
};
