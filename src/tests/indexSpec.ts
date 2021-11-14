import supertest from 'supertest';
import app from '../.';
import imgExist from '../utilities/imgExist';
import imageResize from '../utilities/imageResize';
import config from '../config';

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

describe('Tests helper methods and middleware for image processing', () => {
  it('checks if imgExists() is true when image exists in thumb folder', async () => {
    const result = await imgExist(
      `${config.ASSETS_PATH}/thumb/DEMO_fjord500X121_thumb.jpeg`
    );
    expect(result).toEqual(true);
  });

  it('checks if imageResize() correctly resizes image', async () => {
    await imageResize('fjord', 500, 500, '.jpeg');
    const result = await imgExist(
      `${config.ASSETS_PATH}/thumb/fjord500X500_thumb.jpeg`
    );
    expect(result).toEqual(true);
  });

  it('checks if png images is processed correctly', async () => {
    await imageResize('goku', 500, 500, '.png');
    const result = await imgExist(
      `${config.ASSETS_PATH}/thumb/goku500X500_thumb.png`
    );
    expect(result).toEqual(true);
  });
});
