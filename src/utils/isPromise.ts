import { checkJSType, JSTypes } from '@/helpers';

/**
 * @param {*} value
 * @returns {boolean}
 */
export const isPromise = (value: any) => checkJSType(value, JSTypes.Promise);