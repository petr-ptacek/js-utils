import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isPromise(value: any): boolean {
  return checkJSType(value, JSTypes.Promise);
}