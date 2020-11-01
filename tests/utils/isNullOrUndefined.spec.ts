import { isNullOrUndefined } from '@/index';

describe('Utils: isNullOrUndefined', () => {

  it.each(
      [
        [null, true],
        [undefined, true],
        [false, false],
        [1, false],
        [{}, false]
      ]
  )(
      'isNullOrUndefined(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isNullOrUndefined(testedVal)).toBe(expectedVal);
      }
  );
});