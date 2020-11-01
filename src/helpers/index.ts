export enum JSTypes {
  Number = '[object Number]',
  Object = '[object Object]',
  String = '[object String]',
  Function = '[object Function]',
  Null = '[object Null]',
  Undefined = '[object Undefined]',
  Promise = '[object Promise]',
  Boolean = '[object Boolean]'
}

/**
 * @param {*} value
 * @param {JSTypes} expectedType
 * @returns {string}
 */
export const checkJSType = (value: any, expectedType: JSTypes): boolean =>
    Object.prototype.toString.call(value) === expectedType;