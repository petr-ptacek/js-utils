import { isObject } from '@/utils';

describe('Utils: isObject', () => {

  it.each(
      [
        [{}, true],
        [Object.create(null), true],
        [null, false],
        [undefined, false],
        [Boolean(1), false]
      ]
  )(
      'isObject(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isObject(testedVal)).toBe(expectedVal);
      }
  );

});