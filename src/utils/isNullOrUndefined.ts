import { isNull }      from './isNull';
import { isUndefined } from './isUndefined';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isNullOrUndefined = (value: any): boolean => isNull(value) || isUndefined(value);