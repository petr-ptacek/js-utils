export interface ExecAsyncResult<T> {
    data: T | null;
    error: Error | null;
}
export declare function execAsync<T>(promise: Promise<T>): Promise<ExecAsyncResult<T>>;
