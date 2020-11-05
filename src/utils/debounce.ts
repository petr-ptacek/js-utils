import { isNull } from './isNull';

export type DebounceProcedure = (...args: any[]) => void;

export type DebounceOptions = {
  wait?: number;
  immediate?: boolean;
}

export function debounce<F extends DebounceProcedure>(fn: F, options?: DebounceOptions):
    (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  const { wait, immediate } = {
    wait: 100,
    immediate: false,
    ...(options || {})
  } as DebounceOptions;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    const context = this;
    const callImmediate = immediate && isNull(timeoutId);
    const next = () => {
      timeoutId = null;
      if ( !immediate ) fn.apply(context, args);
    };

    !isNull(timeoutId) && clearTimeout(timeoutId);
    timeoutId = setTimeout(next, wait);
    callImmediate && fn.apply(context, args);
  };
}