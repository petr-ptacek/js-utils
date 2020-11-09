import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value: unknown): boolean {
  return checkJSType(value, JSTypes.String);
}