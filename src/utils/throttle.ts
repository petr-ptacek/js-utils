import { isNull } from './isNull';

export declare type ThrottleProcedure = (...args: any[]) => void;

export declare type ThrottleOptions = {
  delay?: number;
}

export function throttle<F extends ThrottleProcedure>(fn: F, options?: ThrottleOptions):
    (this: ThisParameterType<F>, ...args: Parameters<F>) => void {
  const { delay } = {
    delay: 100,
    ...(options || {})
  } as ThrottleOptions;

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<F>, ...args: Parameters<F>): void {
    if ( !isNull(timeoutId) ) return;

    fn.apply(this, args);

    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, delay);
  };
}