// import myFunc from '.././src/index';
import supertest from 'supertest';
import app from '../.';

// it('expect myFunc(5) to equal 25', () => {
//   expect(myFunc(5)).toEqual(25);
// });

// describe(“suite description”, () => {
//     it(“describes the spec”, () => {
//         const myVar = true;
//         expect(myVar).toBe(true);
//     });
// });

// test end points
// import supertest from 'supertest';
// import app from '../index'; //app server  (express)

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async (done) => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
    done();
  });
});
