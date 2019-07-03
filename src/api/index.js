import axios from 'axios';

export const openaq = axios.create({
  method: 'get',
  baseURL: 'https://api.openaq.org/v1/measurements'
});

export const wiki = axios.create({
  method: 'get',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w'
});

let yesterday = new Date();
let dd = String(yesterday.getDate()).padStart(2, '0');
let mm = String(yesterday.getMonth() + 1).padStart(2, '0');
let yyyy = yesterday.getFullYear();
export const DATE = `${yyyy}-${mm}-${dd}`;
