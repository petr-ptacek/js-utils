## [js-utils](./../../README.md)

## *isBigInt*

> Useful utility function which resolves that some value is of type *bigint*.

```js
import { isBigInt } from "@petr-ptacek/js-utils";

const bigInt = BigInt(Number.MAX_SAFE_INTEGER + 1);

console.log(isBigInt(bigInt)); // true
```