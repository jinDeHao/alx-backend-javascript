const { assert } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

/* eslint-disable */
describe('getPaymentTokenFromAPI', () => {
  it('should resolve with an object', (done) => {
    const promise = getPaymentTokenFromAPI(true);
    promise
      .then((resolvedObject) => {
        assert.isObject(resolvedObject);
        assert.deepEqual(resolvedObject, {
          data: 'Successful response from the API',
        });
        done();
      })
      .catch((e) => {
        done(e);
      });
  });
});
/* eslint-enable */
