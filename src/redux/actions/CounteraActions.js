export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const actions = {
    ACTION_INCREMENT: "INCREMENT",
    ACTION_DECREMENT: "DECREMENT"
}

export const actionCreators = {
    increment: () => ({ type: actions.ACTION_INCREMENT }),
    decrement: () => ({ type: actions.ACTION_DECREMENT }),
}
