## [js-utils](./../../README.md)

## *isObjectEmpty*

> Useful utility function that check if the given argument is **promise**.

```js
import { isPromise } from "@petr-ptacek/js-utils";

const p = new Promise(/* ... */);

console.log(isPromise(p)); // true
console.log(isPromise({ name: "Joe Doe" })); // false
```