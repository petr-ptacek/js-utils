## [js-utils](./../../README.md)

## *isString*

> Useful utility function that check if the given argument is **string**.

```js
import { isString } from "@petr-ptacek/js-utils";

console.log(isString("Joe Doe")); // true
console.log(isString({ name: "Joe Doe" })); // false
```