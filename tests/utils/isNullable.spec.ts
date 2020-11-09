import { isNullable } from '@/index';

describe('Utils: isNullable', () => {

  it.each(
      [
        [null, true],
        [undefined, true],
        [false, false],
        [1, false],
        [{}, false]
      ]
  )(
      'isNullable(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isNullable(testedVal)).toBe(expectedVal);
      }
  );
});