import { isUndefined } from './isUndefined';
import { isNullable }  from './isNullable';
import { isNull }      from './isNull';

export function getNestedObjVal(
    object: { [key: string]: any }, path: string | string[], defaultValue?: any
): any {
  const chunks = Array.isArray(path) ?
      path :
      path.replace(/\[(\w+)]/g, '.$1').replace(/^\./, '').split(/\./g);
  let result = object?.[chunks.shift()];

  while ( chunks.length && !isNullable(result) ) {
    result = result?.[chunks.shift()];
  }

  return chunks.length && isNull(result) ?
      defaultValue :
      isUndefined(result) ?
          defaultValue :
          result;
}