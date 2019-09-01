const axiosBase = require('axios');
const axios = axiosBase.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
});

// FIX this yields security problem
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
module.exports = axios;
