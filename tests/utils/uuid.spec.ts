import { uuid } from '@/index';

describe('Utils: uuid', () => {

  it('Is incremented', () => {
    expect(uuid()).toBe('1');
    expect(uuid('example-')).toBe('example-2');
  });
});