export const actions = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const actionWithList = {
  add: (payload) => ({type: actions.ADD_ITEM, payload: payload}),
  remove: (id) => ({type: actions.REMOVE_ITEM, id}),
};
