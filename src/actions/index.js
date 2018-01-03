import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  tickerRequest: ['tickerId'],
  tickerFetchingSuccess: ['ticker'],
  tickerFetchingFailure: ['error'],
}, {});
