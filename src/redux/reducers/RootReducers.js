import {combineReducers, createStore, applyMiddleware } from 'redux';
import counterReducers from './CounterReducers';
import alerReducers from './AlertReducers';
import listReducers from './ListReducers';
import createSagaMiddleWare from 'redux-saga';
import rootSaga from '../../saga/rootSaga'; 
import {storeReducers} from './StoreReducers';

const sagaMiddleWare = createSagaMiddleWare();


const rootReducers = combineReducers({
  counter: counterReducers,
  alerter: alerReducers,
  listReducer: listReducers,
  storeReducer: storeReducers
});

const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleWare)
)
//root saga every below createStore
sagaMiddleWare.run(rootSaga)

export default store;
