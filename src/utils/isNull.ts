import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isNull(value: unknown): boolean {
  return checkJSType(value, JSTypes.Null);
}
