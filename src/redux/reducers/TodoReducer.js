import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO,
  MARK_TODO,
  MARK_ALL,
  CLEAR_MARK,
} from '../actions/TodoActions';

const initialState = [
  {
    text: 'minhnv',
    marked: false,
    id: 0,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.length === 0 ? 0 : state[0].id + 1,
          marked: false,
          text: action.text,
        },
        ...state,
      ];
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, text: action.text} : todo,
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case MARK_TODO:
      return state.map((todo) =>
        todo.id === action.id ? {...todo, marked: !todo.marked} : todo,
      );

    case MARK_ALL:
      const areAllMarked = state.every((todo) => todo.marked);
      return state.map((todo) => ({...todo, marked: !areAllMarked}));

    case CLEAR_MARK:
      return state.filter((todo) => todo.marked === false);

    default:
      return state;
  }
}
