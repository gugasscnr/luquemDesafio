const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('deve retornar uma senha', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('senha');
    expect(typeof res.body.senha).toBe('string');
    expect(res.body.senha.length).toBeGreaterThan(0);
  });
}); 