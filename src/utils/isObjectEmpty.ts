/**
 * @param {Object} value
 * @returns {boolean}
 */
export const isObjectEmpty = (value: Object): boolean => value.constructor === Object && !Object.keys(value).length;