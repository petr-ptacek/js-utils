export interface ExecAsyncResult<T> {
    data: T | null;
    error: Error | null;
}
export declare const execAsync: <T, K extends Error>(promise: Promise<T>) => Promise<ExecAsyncResult<T>>;
//# sourceMappingURL=execAsync.d.ts.map