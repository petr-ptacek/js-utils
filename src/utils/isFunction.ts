import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isFunction = (value: any): boolean => checkJSType(value, JSTypes.Function);