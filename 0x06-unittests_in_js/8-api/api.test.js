const { expect } = require('chai');
const request = require('request');

/* eslint-disable */
describe('Index page', () => {
  it('check response body', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(body).equal('Welcome to the payment system');
    });
    done();
  });
  it('check response status code', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(res.statusCode).equal(200);
    });
    done();
  });
});
/* eslint-enable */
