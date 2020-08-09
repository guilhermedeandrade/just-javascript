const strictEqual = require('../src/strictEquals')

it('should return true when given arguments are equal', () => {
  expect(strictEqual('banana', 'banana')).toBe(true)
  expect(strictEqual('10', '10')).toBe(true)
  expect(strictEqual(7, 7)).toBe(true)
})

it('should return false when given arguments are not equal', () => {
  expect(strictEqual('banana', 'apple')).toBe(false)
  expect(strictEqual('10', 10)).toBe(false)
})

it('should return false when both arguments are NaN', () => {
  expect(strictEqual(NaN, NaN)).toBe(false)
})

it('should return true when the arguments are 0 and -0', () => {
  expect(strictEqual(0, -0)).toBe(true)
  expect(strictEqual(-0, 0)).toBe(true)
})
