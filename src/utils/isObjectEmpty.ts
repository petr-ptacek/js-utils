import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {Object} value
 * @returns {boolean}
 */
export const isObjectEmpty = (value: Object): boolean =>
    checkJSType(value, JSTypes.Object) && !Object.keys(value).length;