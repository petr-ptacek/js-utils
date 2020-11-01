import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: any): boolean {
  return checkJSType(value, JSTypes.Function);
}