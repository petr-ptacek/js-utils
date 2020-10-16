/**
 * @param {*} value
 * @returns {boolean}
 */
export const isPromise = (value: any) => typeof value === 'object' && typeof value.then === 'function';