import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isObject(value: unknown): boolean {
  return !checkJSType(value, JSTypes.Null) && checkJSType(value, JSTypes.Object);
}