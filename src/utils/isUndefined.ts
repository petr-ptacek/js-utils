import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isUndefined = (value: any): boolean =>
    checkJSType(value, JSTypes.Undefined);