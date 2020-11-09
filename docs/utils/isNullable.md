## [js-utils](./../../README.md)

## *isNullable*

> Useful utility function which resolves that some value is of type **null** or **undefined**.

```js
import { isNullable } from "@petr-ptacek/js-utils";

console.log(isNullable(null)); // true
console.log(isNullable(undefined)); // true
console.log(isNullable(false)); // false
console.log(isNullable({})); // false
```