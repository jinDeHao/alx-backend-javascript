const assert = require('assert');
const calculateNumber = require('./1-calcul');

/* eslint-disable */
describe('calculateNumber(SUM)', () => {
  it('normal number', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('zahlen number', () => {
    assert.equal(calculateNumber('SUM', 1, -3), -2);
  });
  it('radical number', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('non-radical number', () => {
    assert.equal(calculateNumber('SUM', Math.E, Math.PI), 6);
  });
});
describe('calculateNumber(SUBTRACT)', () => {
  it('normal number', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('zahlen number', () => {
    assert.equal(calculateNumber('SUBTRACT', 1, -3), 4);
  });
  it('radical number', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('non-radical number', () => {
    assert.equal(calculateNumber('SUBTRACT', Math.E, Math.PI), 0);
  });
});
describe('calculateNumber(DIVIDE)', () => {
  it('normal number', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 3), 1 / 3);
  });
  it('zahlen number', () => {
    assert.equal(calculateNumber('DIVIDE', 1, -3), -1 / 3);
  });
  it('radical number', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('non-radical number', () => {
    assert.equal(calculateNumber('DIVIDE', Math.E, Math.PI), 1);
  });
  it('Infinity number', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});
/* eslint-enable */
