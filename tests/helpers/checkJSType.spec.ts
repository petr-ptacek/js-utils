import { checkJSType, JSTypes } from '@/helpers';

describe('Helpers: checkJSType', () => {
  it.concurrent.each(
      [
        [25, JSTypes.Number, true],
        ['', JSTypes.String, true],
        [() => undefined, JSTypes.Function, true],
        [null, JSTypes.Null, true],
        [undefined, JSTypes.Undefined, true],
        [true, JSTypes.Boolean, true],
        [Promise.resolve(), JSTypes.Promise, true],
        [{}, JSTypes.Object, true]
      ]
  )(
      'checkJSType(%s, %s) to be %s',
      async (testedVal, jsType, expectedResult) => {
        await expect(checkJSType(testedVal, jsType)).toBe(expectedResult);
      }
  );
});