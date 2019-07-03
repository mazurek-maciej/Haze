import axios from 'axios';

export const openaq = axios.create({
  method: 'get',
  baseURL: 'https://api.openaq.org/v1/measurements'
});

export const wiki = axios.create({
  method: 'get',
  baseURL: 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w'
});