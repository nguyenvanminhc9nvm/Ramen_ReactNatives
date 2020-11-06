const { actions, sagaActions } = require("../actions/StoreActions")

const intialState = {
    stores: []
}

export const storeReducers = (state = intialState, action) => {
    switch (action.type) {
        case sagaActions.FETCH_SUCCESS:
            return {stores: action.data}
        case sagaActions.FETCH_ERROR:
            return {stores: []}
        default: return state;
    }
}