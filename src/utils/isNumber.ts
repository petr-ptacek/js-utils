import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isNumber = (value: any): boolean => checkJSType(value, JSTypes.Number);