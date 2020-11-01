## [js-utils](./../../README.md)

## *downloadFile*

> Useful utility function to download external file assets to user local storage.

```js
import { downloadFile } from "@petr-ptacek/js-utils";

const fileName = "JavasScript The Definitive Guide";
const fileUrl = "path/to/file.pdf"

downloadFile({ fileName, fileUrl });
```