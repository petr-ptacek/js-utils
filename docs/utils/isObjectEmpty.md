## [js-utils](./../../README.md)

## *isObjectEmpty*

> Useful utility function that check if the given object has some properties.

```js
import { isObjectEmpty } from "@petr-ptacek/js-utils";

console.log(isObjectEmpty({ name: "Joe Doe" })); // false
console.log(isObejctEmpty(null)); // false
console.log(isObjectEmpty(Object.create(null))); // true
```