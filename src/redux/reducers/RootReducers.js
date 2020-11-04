import { combineReducers, createStore } from 'redux';
import counterReducers from './CounterReducers';

const rootReducers = combineReducers({
    counter: counterReducers
})

export default createStore(rootReducers);