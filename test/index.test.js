const index = require('../index');

test('check sum function', async () => {
  expect(index.sum(2, 4)).toBe(6);
});