import React from "react";

import { createStore, applyMiddleware } from "redux";
import createSagaMiddlware from "redux-saga";

import rootSaga from "./sagas";
import reducer from "./reducers";
import { Creators } from "./actions";

const sagaMiddleware = createSagaMiddlware();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.dispatch(Creators.tickerRequest("bitcoin"));
store.dispatch(Creators.tickerRequest("bitcoin"));
// Invalid action with incorrect tickerId
// store.dispatch(Creators.tickerRequest('badcoin'));

store.subscribe(() => {
  console.log(store.getState());
});
