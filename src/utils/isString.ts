import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isString = (value: any): boolean => checkJSType(value, JSTypes.String);