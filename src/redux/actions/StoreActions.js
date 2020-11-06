export const actions = {
    FETCH_STORE: 'FETCH_STORE'
}

export const sagaActions = {
    FETCH_ERROR: 'FETCH_ERROR',
    FETCH_SUCCESS: 'FETCH_SUCCESS'
}

export const fetchStore = () => {
    return {
        type: actions.FETCH_STORE
    };
}

export const fetchSuccess = (data) => {
    return {
        type: sagaActions.FETCH_SUCCESS,
        data: data
    }
}

export const fetchError = (error) => {
    return {
        type: sagaActions.FETCH_ERROR
    }
}