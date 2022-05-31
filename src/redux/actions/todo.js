export const TYPE_TODO = {
  ADD_TODO: "add_todo",
  TOGGLE_ADD_DURATION: "toggle_add_duration",
  TOGGLE_RESET: "toggle_reset"
};

export const addTodo = (payload) => {
  return {
    type: TYPE_TODO.ADD_TODO,
    payload
  };
};

export const handleCheckAddDuration = (payload) => {
  return {
    type: TYPE_TODO.TOGGLE_ADD_DURATION,
    payload
  };
};

export const reset = () => {
  return {
    type: TYPE_TODO.TOGGLE_RESET
  };
};
