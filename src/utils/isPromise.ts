import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isPromise(value: unknown): boolean {
  return checkJSType(value, JSTypes.Promise);
}