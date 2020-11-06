import { delay } from 'redux-saga';
import {  all } from 'redux-saga/effects';

import { sayHello } from './CouterSaga';

import { watchIncrement, watchDecrement } from './CouterSaga';
import { watchStores } from './StoreSaga';

export default function* rootSaga(){
    yield all([
        sayHello,
        watchIncrement(),
        watchDecrement(),
        watchStores(),
    ]);
}