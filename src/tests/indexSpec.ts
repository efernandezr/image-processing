import supertest from 'supertest';
import app from '../.';

// Tests endpoint working ok
const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toEqual(200);
  });

  it('gets the /images endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toEqual(200);
  });
});

describe('', () => {
  it('gets the /api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toEqual(200);
  });

  it('gets the /images endpoint', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toEqual(200);
  });
});
