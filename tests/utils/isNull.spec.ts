import { isNull } from '@/index';

describe('Utils: isNull', () => {

  it('Only null type is success', () => {
    expect(isNull(null)).toBeTruthy();
  });

  it('Other types such as Object, string, number are not a null type', () => {
    [{}, Object.create(null), undefined, '', 1, true]
        .forEach(type => expect(isNull(type)).toBeFalsy());
  });
});