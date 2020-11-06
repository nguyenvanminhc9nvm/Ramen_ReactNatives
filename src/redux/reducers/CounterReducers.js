import {actions} from '../actions/CounteraActions';

const initialState = {
  count: 0,
};

export default function counterReducers(state = initialState, action) {
  switch (action.type) {
    case actions.ACTION_INCREMENT:
      return {
        ...state,
        count: state.count + action.step,
      };

    case actions.ACTION_DECREMENT:
      return {
        ...state,
        count: state.count - action.step,
      };

    default:
      return state;
  }
}
