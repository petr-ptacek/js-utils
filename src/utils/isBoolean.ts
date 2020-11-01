import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isBoolean(value: any): boolean {
  return checkJSType(value, JSTypes.Boolean);
}