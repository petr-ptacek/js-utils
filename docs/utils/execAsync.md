## [js-utils](./../../README.md)

## *execAsync*

> Useful utility function which wrap the promise object and then execute it withing the **try catch block** and then return the information based on the execution of the provided promise. Always returns the object `{ data: /* some data, if the promise is resolved */, error: /* the particular error, if the reject state is expanded */ }`

```js
import { execAsync } from "@petr-ptacek/js-utils";

const resolvedPromise = new Promise((resolve, _) => {
  window.setTimeout(() => resolve({ message: "Good" }), 1000);
});

const rejectedPromise = new Promise((_, reject) => {
  window.setTimeout(() => reject(new Error("Oups, something wrong.")));
});

(async function () {
  const { data, error } = await execAsync(resolvedPromise);
  
  if (data) console.log(data); // { message: "Good" }
  if (error) {
    // this is never executed
    console.log(error);
  }
})

(async function () {
  const { data, error } = await execAsync(rejectedPromise);
  
  if (data) { 
    // this is never executed
    console.log(data);
  }

  if (error) console.log("Ouups, something wrong."); // null 
})
```

> Usage with rest call using [axios](https://www.npmjs.com/package/axios).

```js
import { execAsync } from "@petr-ptacek/js-utils";
import axios from "axios";

const fetchData = async (url) => {
  const { data: response, error } = await execAsync(axios.get(url))  
  
  if (resonse) console.log(response.data);
  if (error) console.log(error);
}

fetchData("path/to/some/endpoint");

```