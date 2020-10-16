import { isNull } from './isNull';

const _getStorage = (type: windowStorageType): Storage =>
    type === 'session' ? window.sessionStorage : window.localStorage;

export declare type windowStorageType = 'local' | 'session'

export class WindowStorage {
  static get(key: string, type: windowStorageType = 'session'): string | null {
    return _getStorage(type).getItem(key);
  }

  static set(key: string, value: string, type: windowStorageType = 'session'): void {
    _getStorage(type).setItem(key, value);
  }

  static remove(key: string, type: windowStorageType = 'session'): string | null {
    const value = WindowStorage.get(key, type);
    _getStorage(type).removeItem(key);
    return value;
  }

  static has(key: string, type: windowStorageType = 'session'): boolean {
    return !isNull(WindowStorage.get(key, type));
  }

  static clear(type: windowStorageType): void {
    _getStorage(type).clear();
  }
}