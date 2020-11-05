import {actions} from '../actions/ListActions';

const initalState = {
  users: [
    {id: 1, name: 'minhnv'},
    {id: 2, name: 'minhnv'},
    {id: 3, name: 'minhnv'},
    {id: 4, name: 'minhnv'},
    {id: 5, name: 'minhnv'},
    {id: 6, name: 'minhnv'},
    {id: 7, name: 'minhnv'},
  ],
};

export default function listReducers(state = initalState, action) {
  const {type, payload} = action;
  const { users } = state;
  switch (type) {
    case actions.ADD_ITEM:
        const tmpUsers = [
            ...users,
            payload
        ]
      return {
        ...state,
        users: tmpUsers,
      };
    default:
      return state;
  }
}
