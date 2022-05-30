export const TYPE_TODO = {
  ADD_TODO: "add_todo",
  TOGGLE_RESET: "toggle_reset"
};

export const addTodo = (payload) => {
  return {
    type: TYPE_TODO.ADD_TODO,
    payload
  };
};

export const reset = () => {
  return {
    type: TYPE_TODO.TOGGLE_RESET
  };
};
