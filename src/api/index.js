import axios from 'axios';

export const openaq = axios.create({
  method: 'get',
  baseURL: 'https://api.openaq.org/v1/measurements'
});

export const wiki = axios.create({
  method: 'get',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w'
});

export const reduceCountry = (value, func) => {
  let country;
  switch (value) {
    case 'Poland': {
      country = 'PL';
      break;
    }
    case 'France': {
      country = 'FR';
      break;
    }
    case 'Spain': {
      country = 'ES';
      break;
    }
    case 'Germany': {
      country = 'DE';
      break;
    }
    default: {
      func(true);
    }
  }
  return country;
};

let yesterday = new Date();
let dd = String(yesterday.getDate()).padStart(2, '0');
let mm = String(yesterday.getMonth() + 1).padStart(2, '0');
let yyyy = yesterday.getFullYear();
export const DATE = `${yyyy}-${mm}-${dd}`;
