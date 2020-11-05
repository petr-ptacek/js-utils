import { debounce } from '@/index';

describe('Utils: debounce', () => {

  const mockFn: jest.Mock = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it('Default option \'wait\' is set to 100ms', () => {
    const debounceFn = debounce(mockFn);

    debounceFn();

    jest.advanceTimersByTime(99);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(101);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('Attached fn is called after 1s from last function call', () => {
    const debouncedFn = debounce(mockFn, { wait: 1000 });
    const calls = 5;

    for ( let i = 0; i < calls; i++ ) {
      debouncedFn();
      if ( i !== calls - 1 ) jest.advanceTimersByTime(100);
    }

    jest.advanceTimersByTime(1001);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('Attached function is called with given arguments', () => {
    const debouncedFn = debounce(mockFn, { wait: 1000 });

    debouncedFn({ user: 'Joe Doe' }, false);

    jest.advanceTimersByTime(1001);
    expect(mockFn).toHaveBeenCalledWith({ user: 'Joe Doe' }, false);
  });

  it('Attached function is called with given context (this)', () => {
    const debouncedFn = debounce(mockFn, { wait: 1000 });

    debouncedFn.call({ user: 'Joe Doe' });

    jest.advanceTimersByTime(1001);
    expect(mockFn.mock.instances[0]).toEqual({ user: 'Joe Doe' });
  });

  it('When \'immediate\' option is set, then attached function is called immediate', () => {
    const debounceFn = debounce(mockFn, { wait: 1000, immediate: true });

    debounceFn.call({ user: 'Joe Doe' }, 'Hello World');

    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn.mock.instances[0]).toEqual({ user: 'Joe Doe' });
    expect(mockFn).toBeCalledWith('Hello World');
  });
});