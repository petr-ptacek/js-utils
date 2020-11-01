import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isString(value: any): boolean {
  return checkJSType(value, JSTypes.String);
}