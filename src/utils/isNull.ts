import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isNull = (value: any): boolean => checkJSType(value, JSTypes.Null);