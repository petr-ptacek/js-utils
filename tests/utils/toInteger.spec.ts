import { toInteger } from '@/index';

describe('Utils: toInteger', () => {

  it.each(
      [
        [1.99, 1],
        [0.2, 0],
        [112.666666, 112],
        [1, 1],
        [-1.56, -1]
      ]
  )(
      'toInteger(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(toInteger(testedVal)).toBe(expectedVal);
      }
  );
});