import { isString } from '@/index';

describe('Utils: isString', () => {

  it.each(
      [
        ['Hello World', true],
        [1, false],
        [{}, false],
        [null, false]
      ]
  )(
      'isString(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isString(testedVal)).toBe(expectedVal);
      }
  );

});