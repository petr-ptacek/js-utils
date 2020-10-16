const isFunction = (value) => typeof value === 'function';

const isString = (value) => typeof value === 'string';

const isObjectEmpty = (value) => value.constructor === Object && !Object.keys(value).length;

const isObject = (value) => typeof value !== null && typeof value === 'object';

const isNull = (value) => value === null;

const isUndefined = (value) => typeof value === 'undefined';

const isNullOrUndefined = (value) => isNull(value) || isUndefined(value);

const isPromise = (value) => typeof value === 'object' && typeof value.then === 'function';

const isNumber = (value) => typeof value === 'number';

const isPrimitiveType = (value) => {
    return false;
};

const toInteger = (value) => value | 0;

const downloadFile = ({ fileName, fileUrl }) => {
    const link = window.document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const execAsync = (promise) => __awaiter(void 0, void 0, void 0, function* () {
    const result = { data: null, error: null };
    try {
        result.data = yield promise;
    }
    catch (e) {
        result.error = e;
    }
    return result;
});

const uuid = ((id = 0) => (message = '') => `${message}${++id}`)();

const _getStorage = (type) => type === 'session' ? window.sessionStorage : window.localStorage;
class WindowStorage {
    static get(key, type = 'session') {
        return _getStorage(type).getItem(key);
    }
    static set(key, value, type = 'session') {
        _getStorage(type).setItem(key, value);
    }
    static remove(key, type = 'session') {
        const value = WindowStorage.get(key, type);
        _getStorage(type).removeItem(key);
        return value;
    }
    static has(key, type = 'session') {
        return !isNull(WindowStorage.get(key, type));
    }
    static clear(type) {
        _getStorage(type).clear();
    }
}

export { WindowStorage, downloadFile, execAsync, isFunction, isNull, isNullOrUndefined, isNumber, isObject, isObjectEmpty, isPrimitiveType, isPromise, isString, isUndefined, toInteger, uuid };
