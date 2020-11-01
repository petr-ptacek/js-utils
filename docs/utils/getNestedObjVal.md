## [js-utils](./../../README.md)

### *getNestedObjVal(obj, path, defaultVal)*
- obj - the object to inspecting
- path - the path of property names, can be **string** or **string[]**
    - getNestedObjVal(obj, "path.to.value")
    - getNestedObjVal(obj, ["path", "to", "value"])
- defaultVal - fallback value

> Useful utility function which return the value from the object.

```js
import { getNestedObjVal } from "@petr-ptacek/js-utils";

const users = [
  { name: "Joe Doe", age: 35, hobbies: ["cooking"], parent: null }
];

console.log(getNestedObjVal(users, "0.name")) // Joe Doe
console.log(getNestedObjVal(users, "0.hobbies.0")) // cooking
console.log(getNestedObjVal(users, "0.hobbies.foo.bar.baz.0")) // undefined
console.log(getNestedObjVal(users, "0.hobbies.foo.bar.baz.0", "not found")) // not found
```