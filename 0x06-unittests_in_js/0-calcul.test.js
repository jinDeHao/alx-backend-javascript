const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('my test', () => {
  it('normal number', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('radical number', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
    assert.equal(calculateNumber(1.2, 3.7), 5);
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
