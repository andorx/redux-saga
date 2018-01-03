import fetch from 'isomorphic-fetch';

export default function fetchTickerById(tickerId) {
  return fetch(`https://api.coinmarketcap.com/v1/ticker/${tickerId}/`)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Ticker ID not found');
      }

      return response.json();
    });
}
