export declare enum JSTypes {
    Number = "[object Number]",
    Object = "[object Object]",
    String = "[object String]",
    Function = "[object Function]",
    Null = "[object Null]",
    Undefined = "[object Undefined]",
    Promise = "[object Promise]",
    Boolean = "[object Boolean]"
}
export declare const checkJSType: (value: any, expectedType: JSTypes) => boolean;
