import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export function isSymbol(value: unknown): boolean {
  return checkJSType(value, JSTypes.Symbol);
}