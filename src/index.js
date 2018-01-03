import React from 'react';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddlware from 'redux-saga';
import {
  persistStore,
  persistReducer,
  persistCombineReducers
} from 'redux-persist';
import storage from 'redux-persist/es/storage';

import rootSaga from './sagas';
import reducers from './reducers';
import { Creators } from './actions';

const sagaMiddleware = createSagaMiddlware();

const persistConfig = {
  key: 'ticker',
  // debug: true,
  storage
};

const reducer = persistReducer(persistConfig, reducers);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// Invalid action with incorrect tickerId
// store.dispatch(Creators.tickerRequest('badcoin'));

store.subscribe(() => {
  console.log(store.getState());
});

// Prevent race codition execution
setTimeout(() => {
  store.dispatch(Creators.tickerRequest('ripple'));
}, 5000);
