import { isNull }      from './isNull';
import { isUndefined } from './isUndefined';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isNullable(value: unknown): boolean {
  return isNull(value) || isUndefined(value);
}