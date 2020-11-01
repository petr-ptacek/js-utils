import { getNestedObjVal } from '@/index';

describe('Utils: getNestedObjVal', () => {

  const users = [
    { name: 'Joe Doe', age: 34, hobbies: ['football'], parent: null },
  ];

  test('Accessing', () => {
    expect(getNestedObjVal(users, '0')).toEqual(users[0]);
    expect(getNestedObjVal(users, ['0'])).toEqual(users[0]);

    expect(getNestedObjVal(users, '0.name')).toBe('Joe Doe');
    expect(getNestedObjVal(users, '0.name'.split('.'))).toBe('Joe Doe');

    expect(getNestedObjVal(users, '0.hobbies.0')).toBe('football');
    expect(getNestedObjVal(users, '0.hobbies.0'.split('.'))).toBe('football');

    expect(getNestedObjVal(users, '4')).toBeUndefined();
    expect(getNestedObjVal(users, ['4'])).toBeUndefined();

    expect(getNestedObjVal(users, '0.hobbies.foo.bar.baz')).toBeUndefined();
    expect(getNestedObjVal(users, '0.hobbies.foo.bar.baz'.split('.'))).toBeUndefined();

    expect(getNestedObjVal(users, '0.parent')).toBeNull();
    expect(getNestedObjVal(users, '0.parent'.split('.'))).toBeNull();

    expect(getNestedObjVal(users, '0.parent.foo.bar.baz')).toBeUndefined();
    expect(getNestedObjVal(users, '0.parent.foo.bar.baz'.split('.'))).toBeUndefined();
  });

  test('Provide fallback value', () => {
    expect(getNestedObjVal(users, '1', 'defaultValue')).toBe('defaultValue');
  });

});