import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isUndefined(value: any): boolean {
  return checkJSType(value, JSTypes.Undefined);
}