import { actions } from '../redux/actions/CounteraActions';
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.log("Hello ")
}

function* increment(){
    console.log("increment saga")
}

function* decrement(){
    console.log("decrement saga")
}


export function* watchIncrement() {
    yield takeEvery(actions.ACTION_INCREMENT, increment)
}

export function* watchDecrement() {
    yield takeEvery(actions.ACTION_DECREMENT, decrement)
}

export default function* rootSaga(){
    yield all([
        sayHello,
        watchIncrement(),
        watchDecremnt(),
    ]);
}