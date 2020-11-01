## [js-utils](./../../README.md)

## *isNumber*

> Useful utility function which resolves that some value is of type **number**.

```js
import { isNumber } from "@petr-ptacek/js-utils";

console.log(isNumber(null)); // false
console.log(isNumber(1)); // true
console.log(isNumber(false)); // false
```