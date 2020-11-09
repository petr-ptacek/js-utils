import { isBigInt } from '@/utils';

describe('Utils: isBigInt', () => {
  it.each([
    [BigInt(Number.MAX_SAFE_INTEGER + 1), true],
    [1, false],
    ['', false],
    [true, false],
    [{}, false]
  ])(
      'isBixInt(%s) should to be %s',
      (testedValue, expectedValue) => {
        expect(isBigInt(testedValue)).toBe(expectedValue);
      }
  );
});