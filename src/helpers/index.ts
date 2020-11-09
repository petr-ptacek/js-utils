export enum JSTypes {
  Number = '[object Number]',
  Object = '[object Object]',
  String = '[object String]',
  Function = '[object Function]',
  Null = '[object Null]',
  Undefined = '[object Undefined]',
  Promise = '[object Promise]',
  Boolean = '[object Boolean]',
  BigInt = '[object BigInt]',
  Symbol = '[object Symbol]'
}

/**
 * @param {*} value
 * @param {JSTypes} expectedType
 * @returns {string}
 */
export function checkJSType(value: unknown, expectedType: JSTypes): boolean {
  return Object.prototype.toString.call(value) === expectedType;
}