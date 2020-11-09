import { isSymbol } from '@/utils';

describe('Utils: isSymbol', () => {

  it.each(
      [
        [Symbol('Some Symbol'), true],
        [1, false],
        [true, false],
        ['', false],
        [{}, false]
      ]
  )(
      'isSymbol(%s) should to be %s',
      (testedValue, expectedValue) => {
        expect(isSymbol(testedValue)).toBe(expectedValue);
      }
  );
});