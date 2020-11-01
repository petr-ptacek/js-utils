import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isBoolean = (value: any): boolean => checkJSType(value, JSTypes.Boolean);