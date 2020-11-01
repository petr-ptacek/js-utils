import { isUndefined } from '@/index';

describe('Utils: isUndefined', () => {

  it.each(
      [
        [undefined, true],
        [1, false],
        [{}, false],
        [null, false],
        ['hello world', false]
      ]
  )(
      'isUndefined(%s) should to be %s',
      (testedVal, expectedValue) => {
        expect(isUndefined(testedVal)).toBe(expectedValue);
      }
  );

});