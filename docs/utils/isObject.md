## [js-utils](./../../README.md)

## *isObject*

> Useful utility function which resolves that some value is of type **object**.

```js
import { isObject } from "@petr-ptacek/js-utils";

console.log(isObejct([])); // false
console.log(isObejct(null)); // false
console.log(isObject(Object.create(null))); // true
console.log(isObject({})); // true
```