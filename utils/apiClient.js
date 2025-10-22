const axios = require('axios');
require('dotenv').config();

const api = axios.create({
  baseURL: 'https://api.football-data.org', // v4 is current version
  headers: { 'X-Auth-Token':  process.env.FOOTBALL_API_KEY, }
});

module.exports = api;
