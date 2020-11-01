import { isPromise } from '@/index';

describe('Utils: isPromise', () => {
  it.each(
      [
        [Promise.resolve(), true],
        [1, false],
        [{}, false],
        [() => undefined, false]
      ]
  )(
      'isPromise(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isPromise(testedVal)).toBe(expectedVal);
      }
  );
});