import { isObjectEmpty } from '@/index';

describe('Utils: isObjectEmpty', () => {

  it.each(
      [
        [{}, true],
        [{ a: 'a' }, false],
        [null, false],
        [Object.create(null), true],
        [Object.create({ a: 'a' }), true]
      ]
  )(
      'isObjectEmpty(%s) should to be %s',
      (testedVal, expectedVal) => {
        expect(isObjectEmpty(testedVal)).toBe(expectedVal);
      }
  );
});