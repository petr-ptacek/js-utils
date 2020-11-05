export declare type DebounceProcedure = (...args: any[]) => void;
export declare type DebounceOptions = {
    wait?: number;
    immediate?: boolean;
};
export declare function debounce<F extends DebounceProcedure>(fn: F, options?: DebounceOptions): (this: ThisParameterType<F>, ...args: Parameters<F>) => void;
