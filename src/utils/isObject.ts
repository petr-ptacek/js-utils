/**
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value: any): boolean => typeof value !== null && typeof value === 'object';