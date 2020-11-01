import { isFunction } from '@/index';

describe('Utils: isFunction', () => {

  it('Arrow and ES5 (style) functions', () => {
    [
      () => undefined,
      function () {
        return undefined;
      }
    ].forEach(fn => expect(isFunction(fn)).toBeTruthy());
  });

  it('Other types are not a function', () => {
    [1, '', Symbol(), /regExp/, true].forEach(type => {
      expect(isFunction(type)).toBeFalsy();
    });
  });
});