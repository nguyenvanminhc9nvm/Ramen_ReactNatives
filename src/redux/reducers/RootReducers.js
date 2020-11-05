import { combineReducers, createStore } from 'redux';
import counterReducers from './CounterReducers';
import alerReducers from './AlertReducers';
import listReducers from './ListReducers';

const rootReducers = combineReducers({
    counter: counterReducers,
    alerter: alerReducers,
    listReducer: listReducers
})

export default createStore(rootReducers);