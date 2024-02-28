const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

/* eslint-disable */
describe('payment', () => {
  it('call sendPaymentRequestToAPI with 100, and 20: ', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleLogSpy);
    consoleLogSpy.restore();
  });
  it('call sendPaymentRequestToAPI with 10, and 10: ', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleLogSpy);
    consoleLogSpy.restore();
  });
});
/* eslint-enable */
