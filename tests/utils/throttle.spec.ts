import { throttle } from '@/index';

describe('Utils: throttle', () => {

  const mockFn: jest.Mock = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('The attached function will be executed only once in a given time interval.', () => {
    const throttleFn = throttle(mockFn, { delay: 1000 });

    throttleFn();
    jest.advanceTimersByTime(500);
    throttleFn();
    throttleFn();
    jest.advanceTimersByTime(501);

    expect(mockFn).toBeCalledTimes(1);
  });

  it('Attached function will be called with given context (this)', () => {
    const throttleFn = throttle(mockFn, { delay: 500 });

    throttleFn.call({ user: 'Joe Doe' });

    expect(mockFn.mock.instances[0]).toEqual({ user: 'Joe Doe' });
  });

  it('Attached function will be called with given arguments', () => {
    const throttleFn = throttle(mockFn, { delay: 500 });

    throttleFn('Joe Doe', true, 88);

    expect(mockFn).toBeCalledWith('Joe Doe', true, 88);
  });
});