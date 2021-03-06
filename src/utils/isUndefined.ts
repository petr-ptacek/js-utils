import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isUndefined(value: unknown): boolean {
  return checkJSType(value, JSTypes.Undefined);
}