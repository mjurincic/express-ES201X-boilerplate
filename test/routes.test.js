import request from 'supertest';
import app from '../src/app.js';

describe('GET /', () => {
  it('should render properly', async () => {
    const response = await request(app).get('/');
    expect(response.status).toEqual(200);
  });
});

describe('GET /about', () => {
  it('should render properly with valid parameters', async () => {
    const response = await request(app)
      .get('/about')
      .query({ title: 'List title' });
    expect(response.status).toEqual(200);
  });

  it('should error without a valid parameter', async () => {
    const response = await request(app).get('/about');
    expect(response.status).toEqual(500);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    const response1 = await request(app).get('/404');
    expect(response1.status).toEqual(404);
    const response2 = await request(app).get('/notfound');
    expect(response2.status).toEqual(404);
  });
});
