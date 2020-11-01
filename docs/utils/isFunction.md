## [js-utils](./../../README.md)

## *isFunction*

> Useful utility function which resolves that some value is of type *function*.

```js
import { isFunction } from "@petr-ptacek/js-utils";

const fnES5 = function () { /* ... */ };
const fnArrow = () => { /* ... */};

console.log(isFunction(true)); // false
console.log(isFunction(false)); // false
console.log(isBoolean(fnES5)); // true
console.log(isBoolean(fnArrow)); // true
```