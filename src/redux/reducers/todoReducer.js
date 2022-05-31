import { TYPE_TODO } from "../actions/todo";

const initialState = {
  todos: [],
  checkAddDuration: false
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_TODO.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case TYPE_TODO.TOGGLE_ADD_DURATION:
      return {
        ...state,
        checkAddDuration: !state.checkAddDuration
      };
    case TYPE_TODO.TOGGLE_RESET:
      return initialState;

    default:
      return state;
  }
};
