import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {Object} value
 * @returns {boolean}
 */
export function isObjectEmpty(value: Object): boolean {
  return checkJSType(value, JSTypes.Object) && !Object.keys(value).length;
}