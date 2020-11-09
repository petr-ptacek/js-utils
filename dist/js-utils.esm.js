var JSTypes;
(function (JSTypes) {
    JSTypes["Number"] = "[object Number]";
    JSTypes["Object"] = "[object Object]";
    JSTypes["String"] = "[object String]";
    JSTypes["Function"] = "[object Function]";
    JSTypes["Null"] = "[object Null]";
    JSTypes["Undefined"] = "[object Undefined]";
    JSTypes["Promise"] = "[object Promise]";
    JSTypes["Boolean"] = "[object Boolean]";
    JSTypes["BigInt"] = "[object BigInt]";
    JSTypes["Symbol"] = "[object Symbol]";
})(JSTypes || (JSTypes = {}));
function checkJSType(value, expectedType) {
    return Object.prototype.toString.call(value) === expectedType;
}

function isFunction(value) {
    return checkJSType(value, JSTypes.Function);
}

function isString(value) {
    return checkJSType(value, JSTypes.String);
}

function isObjectEmpty(value) {
    return checkJSType(value, JSTypes.Object) && !Object.keys(value).length;
}

function isObject(value) {
    return !checkJSType(value, JSTypes.Null) && checkJSType(value, JSTypes.Object);
}

function isNull(value) {
    return checkJSType(value, JSTypes.Null);
}

function isUndefined(value) {
    return checkJSType(value, JSTypes.Undefined);
}

function isNullable(value) {
    return isNull(value) || isUndefined(value);
}

function isPromise(value) {
    return checkJSType(value, JSTypes.Promise);
}

function isNumber(value) {
    return checkJSType(value, JSTypes.Number);
}

function isBoolean(value) {
    return checkJSType(value, JSTypes.Boolean);
}

function isSymbol(value) {
    return checkJSType(value, JSTypes.Symbol);
}

function isBigInt(value) {
    return checkJSType(value, JSTypes.BigInt);
}

function toInteger(value) {
    return value | 0;
}

function downloadFile(_a) {
    var fileName = _a.fileName, fileUrl = _a.fileUrl;
    var link = window.document.createElement('a');
    link.style.display = 'none';
    link.href = fileUrl;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    window.document.body.appendChild(link);
    link.click();
    window.document.body.removeChild(link);
}

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function execAsync(promise) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _a, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    result = { data: null, error: null };
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    _a = result;
                    return [4, promise];
                case 2:
                    _a.data = _b.sent();
                    return [3, 4];
                case 3:
                    e_1 = _b.sent();
                    result.error = e_1;
                    return [3, 4];
                case 4: return [2, result];
            }
        });
    });
}

var _uuid = (function (id) {
    if (id === void 0) { id = 0; }
    return function (message) {
        if (message === void 0) { message = ''; }
        return "" + message + ++id;
    };
})();
function uuid(message) {
    if (message === void 0) { message = ''; }
    return _uuid(message);
}

var _getStorage = function (type) {
    return type === 'session' ? window.sessionStorage : window.localStorage;
};
var WindowStorage = (function () {
    function WindowStorage() {
    }
    WindowStorage.get = function (key, type) {
        if (type === void 0) { type = 'session'; }
        return _getStorage(type).getItem(key);
    };
    WindowStorage.set = function (key, value, type) {
        if (type === void 0) { type = 'session'; }
        _getStorage(type).setItem(key, value);
    };
    WindowStorage.remove = function (key, type) {
        if (type === void 0) { type = 'session'; }
        var value = WindowStorage.get(key, type);
        _getStorage(type).removeItem(key);
        return value;
    };
    WindowStorage.has = function (key, type) {
        if (type === void 0) { type = 'session'; }
        return !isNull(WindowStorage.get(key, type));
    };
    WindowStorage.clear = function (type) {
        if (!type)
            throw new Error('WindowStorage.clear: no argument provided');
        _getStorage(type).clear();
    };
    return WindowStorage;
}());

function getNestedObjVal(object, path, defaultValue) {
    var chunks = Array.isArray(path) ?
        path :
        path.replace(/\[(\w+)]/g, '.$1').replace(/^\./, '').split(/\./g);
    var result = object === null || object === void 0 ? void 0 : object[chunks.shift()];
    while (chunks.length && !isNullable(result)) {
        result = result === null || result === void 0 ? void 0 : result[chunks.shift()];
    }
    return chunks.length && isNull(result) ?
        defaultValue :
        isUndefined(result) ?
            defaultValue :
            result;
}

function debounce(fn, options) {
    var _a = __assign({ wait: 100, immediate: false }, (options || {})), wait = _a.wait, immediate = _a.immediate;
    var timeoutId = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var callImmediate = immediate && isNull(timeoutId);
        var next = function () {
            timeoutId = null;
            if (!immediate)
                fn.apply(_this, args);
        };
        !isNull(timeoutId) && clearTimeout(timeoutId);
        timeoutId = setTimeout(next, wait);
        callImmediate && fn.apply(this, args);
    };
}

function throttle(fn, options) {
    var delay = __assign({ delay: 100 }, (options || {})).delay;
    var timeoutId = null;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!isNull(timeoutId))
            return;
        fn.apply(this, args);
        timeoutId = setTimeout(function () {
            timeoutId = null;
        }, delay);
    };
}

export { WindowStorage, debounce, downloadFile, execAsync, getNestedObjVal, isBigInt, isBoolean, isFunction, isNull, isNullable, isNumber, isObject, isObjectEmpty, isPromise, isString, isSymbol, isUndefined, throttle, toInteger, uuid };
