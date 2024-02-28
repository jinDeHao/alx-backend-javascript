const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

/* eslint-disable */
describe('payment', () => {
  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    sinon.assert.calledOnce(consoleLogSpy);
    consoleLogSpy.restore();
  });
  it('call sendPaymentRequestToAPI with 100, and 20: ', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
  });
  it('call sendPaymentRequestToAPI with 10, and 10: ', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
  });
});
/* eslint-enable */
