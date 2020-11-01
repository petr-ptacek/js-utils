import { isBoolean } from '@/index';

describe('Utils: isBoolean', () => {

  it.each(
      [
        [true, true],
        [false, true],
        [1, false],
        [0, false],
        [null, false],
        [{}, false],
        ['', false]
      ]
  )(
      'isBoolean(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isBoolean(testedVal)).toBe(expectedVal);
      }
  );
});