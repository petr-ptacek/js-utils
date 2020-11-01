import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isNumber(value: any): boolean {
  return checkJSType(value, JSTypes.Number);
}