export interface ExecAsyncResult<T> {
  data: T | null;
  error: Error | null;
}

/**
 * @param {Promise} promise
 * @returns {Promise<{ data: any, error: any }>}
 */
export async function execAsync<T>(promise: Promise<T>): Promise<ExecAsyncResult<T>> {
  const result: ExecAsyncResult<T> = { data: null, error: null };

  try {
    result.data = await promise;
  } catch ( e ) {
    result.error = e;
  }

  return result;
}