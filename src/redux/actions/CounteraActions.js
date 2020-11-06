export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const actions = {
  ACTION_INCREMENT: 'INCREMENT',
  ACTION_DECREMENT: 'DECREMENT',
};

export const actionCreators = {
  increment: (step) => ({type: actions.ACTION_INCREMENT, step: step}),
  decrement: (step) => ({type: actions.ACTION_DECREMENT, step: step}),
};
