const api = require('../utils/apiClient');
const { test, expect } = require('@playwright/test');

test.describe('Football-Data API - matches Endpoint', () => {
  test('GET /v4/matches should return a list of matches', async () => {
    const response = await api.get('/v4/matches');
    expect(response.status).toBe(200);

    const body = response.data;
    expect(body).toHaveProperty('matches');
    expect(Array.isArray(body.matches)).toBe(true);

    if(body.matches.length >  0) {
      const match =body.matches[0];
       expect(match).toHaveProperty('competitions');
      expect(match).toHaveProperty('ids');
      expect(match).toHaveProperty('dateFrom');
      expect(match).toHaveProperty('dateTo');
      expect(match).toHaveProperty('status');
    }
  });
  test('verify GET /v4/matches filters return valid matches for a given competition ', async () => {
    const response = await api.get('/v4/matches?competitions=2048');
    const CompetitionId = 2048;

    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('matches');
    expect(Array.isArray(response.data.matches)).toBe(true);

    const matches = response.data.matches;

    expect(matches.length).toBeGreaterThanOrEqual(0);

    for (const match of matches) {
      expect(match).toHaveProperty('competition');
    expect(match.competition.id).toBe(competitionId);
    expect(match).toHaveProperty('status');
    expect(match).toHaveProperty('utcDate');
  }
  })
});