import { isNumber } from '@/index';

describe('Utils: isNumber', () => {
  it.each(
      [
        [1, true],
        [0, true],
        [undefined, false],
        [false, false],
        [true, false],
        ['hello world', false]
      ]
  )(
      'isNumber(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isNumber(testedVal)).toBe(expectedVal);
      }
  );
});