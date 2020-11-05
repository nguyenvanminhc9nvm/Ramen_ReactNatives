import {actions} from '../actions/CounteraActions';

const initialState = {
  count: 0,
};

export default function counterReducers(state = initialState, action) {
  switch (action.type) {
    case actions.ACTION_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actions.ACTION_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}
