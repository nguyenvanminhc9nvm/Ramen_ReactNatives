import { INCREMENT } from "./CounteraActions"

export const actions = {
    INCREMENT: "+",
    DECREMENT: "-"
}

export const increaseAction = (step) => {
    return {
        type: actions.INCREMENT,
        step: step
    }
}

export const increaseAction = (step) => {
    return {
        type: actions.DECREMENT,
        step: step
    }
}
