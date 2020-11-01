import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isObject = (value: any): boolean =>
    !checkJSType(value, JSTypes.Null) && checkJSType(value, JSTypes.Object);