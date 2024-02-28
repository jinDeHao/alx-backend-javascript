const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

/* eslint-disable */
describe('payment', () => {
  it('sendPaymentRequestToApi should be the same as Utils.calculateNumber(SUM...)', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(calculateNumberSpy, 'SUM', 100, 20);
    calculateNumberSpy.restore();
  });
  it('stubs and let check if it is the same', () => {
    const consoleLogSpy = sinon.spy(console, 'log');
    const myStub = sinon.stub().callsFake(() => 10);
    sinon.replace(Utils, 'calculateNumber', myStub);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(myStub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    sinon.restore();
    consoleLogSpy.restore();
  });
});
/* eslint-enable */
