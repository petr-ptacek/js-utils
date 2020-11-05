export declare type ThrottleProcedure = (...args: any[]) => void;
export declare type ThrottleOptions = {
    delay?: number;
};
export declare function throttle<F extends ThrottleProcedure>(fn: F, options?: ThrottleOptions): (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
