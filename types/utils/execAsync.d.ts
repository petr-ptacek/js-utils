export interface ExecAsyncResult<T> {
    data: T | null;
    error: Error | null;
}
export declare const execAsync: <T>(promise: Promise<T>) => Promise<ExecAsyncResult<T>>;
