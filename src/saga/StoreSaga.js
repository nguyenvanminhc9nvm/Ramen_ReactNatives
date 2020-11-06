import { put, takeLatest } from "redux-saga/effects";
import { actions } from "../redux/actions/StoreActions";
import { sagaActions } from "../redux/actions/StoreActions";

const url = 'http://192.168.1.100:6969/api/v1/stores';

function* doGetStore() {
    const response = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
        },
        body: ''
    });
    console.log(response)
    const stores = yield response.status === 200 ? JSON.parse(response._bodyInit): []
    return stores
}

export const Api = {
    doGetStore
};

function* fetchMovies() {
    try {
        console.log("call api get stores")
        const receiverStores = yield Api.doGetStore();
        yield put({ type: sagaActions.FETCH_SUCCESS, data: receiverStores })
    } catch(error) {

    }
}

export function* watchStores() {
    
    yield takeLatest(actions.FETCH_STORE, fetchMovies())
}