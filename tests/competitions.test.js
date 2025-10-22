const api = require('../utils/apiClient');
const { test, expect } = require('@playwright/test');

test.describe('Football-Data API - Competitions Endpoint', () => {
  test('GET /v4/competitions should return a list of competitions', async () => {
    const response = await api.get('/v4/competitions/');
  
    expect(response.status).toBe(200);

    expect(Array.isArray(response.data.competitions)).toBe(true);

   
    const first = response.data.competitions[0];
    expect(first).toHaveProperty('id');
    expect(first).toHaveProperty('name');
    expect(first).toHaveProperty('area');
    expect(first).toHaveProperty('code');
  });
  test('Competitions include a valid MLS Entry', async () => {
    const response = await api.get('/v4/competitions/');
    const competitions = response.data.competitions;

    const MLS = competitions.find(c => c.code === 'MLS');
    expect(MLS).toBeDefined();
    expect(MLS.name).toBe('MLS');
  });
});
