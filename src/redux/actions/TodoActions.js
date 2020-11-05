export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'DELETE_TODO';
export const MARK_TODO = 'MARK_TODO';
export const MARK_ALL = 'MARK_ALL';
export const CLEAR_MARK = 'CLEAR_MARK';

export function triggerAddTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function triggerdeleteTodo(id) {
  return {
    type: DELETE_TODO,
    id,
  };
}

export function triggereditTodo(id, text) {
  return {
    type: EDIT_TODO,
    id,
    text,
  };
}

export function triggerMarkTodo(id) {
  return {
    type: MARK_TODO,
    id,
  };
}

export function triggerMarkAll() {
  return {
    type: MARK_ALL,
  };
}

export function triggerClearMark() {
  return {
    type: CLEAR_MARK,
  };
}
