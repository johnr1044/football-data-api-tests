const api = require('../utils/apiClient');
const { test, expect } = require('@playwright/test');

test.describe('Football-Data API -  Areas Endpoint', () => {
  test('GET /4/teams returns 200 and valid data', async () => {
    const response = await api.get('/v4/areas/');
    expect(response.status).toBe(200);

     const body = response.data;
    expect(body).toHaveProperty('areas');
    })
  });
  test('verify GET /v4/areas/2184 filters return valid area information ', async () => {
    const response = await api.get('/v4/areas/2184');
    const id = 2184;
    const area = response.data;

    
   expect(area).toHaveProperty('id', 2184);
  expect(area).toHaveProperty('name', 'Peru');

  
});