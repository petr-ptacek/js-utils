export declare type WindowStorageType = 'local' | 'session';
export declare class WindowStorage {
    static get(key: string, type?: WindowStorageType): string | null;
    static set(key: string, value: string, type?: WindowStorageType): void;
    static remove(key: string, type?: WindowStorageType): string | null;
    static has(key: string, type?: WindowStorageType): boolean;
    static clear(type: WindowStorageType): void;
}
