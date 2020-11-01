## [js-utils](./../../README.md)

## *WindowStorage*

> Utility that wraps the **SessionStorage** and **LocalStorage**. The default is **session** type of the Storage.

* type is string and can be **session** (default) or **local**
* every value, that is saved to the Storage must to be a **string**, you can use **JSON.stringify** helper

## Methods

#### set(key, value, type)
* *key* - the string identifier
* *value* - string value to save with the relation of key
* *type* - optional parameter the type of the destination storage (**session** or **local**), default is **session**

> Set the value to the Storage.

---

#### get(key, type)
* *key* - the string identifier
* *type* - optional parameter the type of the destination storage (**session** or **local**), default is **session**

> Get the value from the Storage based on the key. If it is not in the Storage, returns **null**. 

---

#### has(key, type)
* *key* - the string identifier
* *type* - optional parameter the type of the destination storage (**session** or **local**), default is **session**
* *returns boolean*

> Check if exist value to the given key.

---
 
#### remove(key, type)
* *key* - the string identifier
* *type* - optional parameter the type of the destination storage (**session** or **local**), default is **session**

> Remove the pair [key, value] from the Storage and return the **removed value** or **null**.

---

#### clear(type)
* *type* - parameter the type of the destination storage (**session** or **local**), default is **session**

> clear the Storage
---
```js
import { WindowStorage } from "@petr-ptacek/js-utils";

// Session

WindowStorage.set("name", "Joe Doe");

WindowStorage.get("name", "Joe Doe");

WindowStorage.has("name", "Joe Doe");

WindowStorage.remove("name", "Joe Doe");

WindowStorage.clear("session");

// Local

WindowStorage.set("name", "Joe Doe", "local");

WindowStorage.get("name", "Joe Doe", "local");

WindowStorage.has("name", "Joe Doe", "local");

WindowStorage.remove("name", "Joe Doe", "local");

WindowStorage.clear("session", "local");

```