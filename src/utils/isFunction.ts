import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isFunction(value: unknown): boolean {
  return checkJSType(value, JSTypes.Function);
}