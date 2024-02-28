const assert = require('assert');
const calculateNumber = require('./0-calcul');

/* eslint-disable */
describe('calculateNumber', () => {
  it('normal number', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('zahlen number', () => {
    assert.equal(calculateNumber(1, -3), -2);
  });
  it('radical number', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('non-radical number', () => {
    assert.equal(calculateNumber(Math.E, Math.PI), 6);
  });
});
/* eslint-enable */
