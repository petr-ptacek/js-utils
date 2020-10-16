import { isFunction } from '@/index';

describe('Utils: isFunction', () => {

  it('Arrow function is function', () => {
    [
      () => undefined,
      function () {
        return undefined;
      }
    ].forEach(fn => expect(isFunction(fn)).toBeTruthy());
  });

  it('Primitive types are not a function', () => {
    [1, '', Symbol(), /regExp/, true].forEach(type => {
      expect(isFunction(type)).toBeFalsy();
    });
  });
});