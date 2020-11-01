## [js-utils](./../../README.md)

## *isNullOrUndefined*

> Useful utility function which resolves that some value is of type **null** or **undefined**.

```js
import { isNullOrUndefined } from "@petr-ptacek/js-utils";

console.log(isNullOrUndefined(null)); // true
console.log(isNullOrUndefined(undefined)); // true
console.log(isNullOrUndefined(false)); // false
console.log(isNullOrUndefined({})); // false
```