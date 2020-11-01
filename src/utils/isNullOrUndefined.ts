import { isNull }      from './isNull';
import { isUndefined } from './isUndefined';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isNullOrUndefined(value: any): boolean {
  return isNull(value) || isUndefined(value);
}