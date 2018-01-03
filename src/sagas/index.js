import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Types, Creators } from '../actions';
import fetchTickerById from '../api';

function* fetchTicker(action) {
  try {
    const ticker = yield call(fetchTickerById, action.tickerId);

    yield put(Creators.tickerFetchingSuccess(ticker[0]));
  } catch (e) {
    yield put(Creators.tickerFetchingFailure(e.message));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(Types.TICKER_REQUEST, fetchTicker),
  ]);
}

export default rootSaga;
