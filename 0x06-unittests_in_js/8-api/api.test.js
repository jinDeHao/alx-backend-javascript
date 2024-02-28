const { expect } = require('chai');
const request = require('request');

/* eslint-disable */
describe('Index page', () => {
  it('check response status code', (done) => {
    request.get('http://localhost:7865/', (error, res, body) => {
      expect(res.status).equal(200);
      expect(body).equal('Welcome to the payment system');
    });
    done();
  });
});
/* eslint-enable */
