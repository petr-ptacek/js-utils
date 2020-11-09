export declare enum JSTypes {
    Number = "[object Number]",
    Object = "[object Object]",
    String = "[object String]",
    Function = "[object Function]",
    Null = "[object Null]",
    Undefined = "[object Undefined]",
    Promise = "[object Promise]",
    Boolean = "[object Boolean]",
    BigInt = "[object BigInt]",
    Symbol = "[object Symbol]"
}
export declare function checkJSType(value: unknown, expectedType: JSTypes): boolean;
