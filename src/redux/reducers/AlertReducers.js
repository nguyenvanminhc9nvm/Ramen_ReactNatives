import {actions} from '../actions/AlertActions';

const initalState = {
  message: '',
  colors: 'white',
};

export default function alertReducers(state = initalState, action) {
  switch (action.type) {
    case actions.SHOW_ALERT_ERROR:
      return {
        ...state,
        message: 'message error',
        colors: 'red',
      };
    case actions.SHOW_ALERT_SUCCESS:
      return {
        ...state,
        message: 'message success',
        colors: 'green',
      };
    case actions.SHOW_ALERT_WARNING:
      return {
        ...state,
        message: 'message warnings',
        colors: 'yellow',
      };
    default:
      return state;
  }
}
