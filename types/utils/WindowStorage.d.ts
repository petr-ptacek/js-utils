export declare type windowStorageType = 'local' | 'session';
export declare class WindowStorage {
    static get(key: string, type?: windowStorageType): string | null;
    static set(key: string, value: string, type?: windowStorageType): void;
    static remove(key: string, type?: windowStorageType): string | null;
    static has(key: string, type?: windowStorageType): boolean;
    static clear(type: windowStorageType): void;
}
//# sourceMappingURL=WindowStorage.d.ts.map