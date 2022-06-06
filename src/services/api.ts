import axios from 'axios'

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'x-api-key': process.env.API_URL as string,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
  },
  timeout: 10000,
  withCredentials: true
});

export default api;
