import { createReducer } from 'reduxsauce';

import { Types } from '../actions';

const INITIAL_STATE = {
  tickerId: undefined,
  ticker: {},
  error: '',
};

export const requestTicker = (state, action) => {
  return {
    ...state,
    ticker: {},
    tickerId: action.tickerId,
  };
};

export const tickerFetchingSuccess = (state, action) => {
  return {
    ...state,
    ticker: action.ticker,
  };
};

export const tickerFetchingFailure = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
}

export default createReducer(INITIAL_STATE, {
  [Types.TICKER_REQUEST]: requestTicker,
  [Types.TICKER_FETCHING_SUCCESS]: tickerFetchingSuccess,
  [Types.TICKER_FETCHING_FAILURE]: tickerFetchingFailure,
});
