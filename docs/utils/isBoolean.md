## [js-utils](./../../README.md)

## *isBoolean*

> Useful utility function which resolves that some value is of type *boolean*. Same as strict comparator operator `===`.

```js
import { isBoolean } from "@petr-ptacek/js-utils";

console.log(isBoolean(true)); // true
console.log(isBoolean(false)); // true
console.log(isBoolean("Hello World")); // false
```