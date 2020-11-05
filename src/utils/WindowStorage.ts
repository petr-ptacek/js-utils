import { isNull } from './isNull';

declare type WindowStorageType = 'local' | 'session'

const _getStorage = (type: WindowStorageType): Storage =>
    type === 'session' ? window.sessionStorage : window.localStorage;

export class WindowStorage {

  static get(key: string, type: WindowStorageType = 'session'): string | null {
    return _getStorage(type).getItem(key);
  }

  static set(key: string, value: string, type: WindowStorageType = 'session'): void {
    _getStorage(type).setItem(key, value);
  }

  static remove(key: string, type: WindowStorageType = 'session'): string | null {
    const value = WindowStorage.get(key, type);
    _getStorage(type).removeItem(key);
    return value;
  }

  static has(key: string, type: WindowStorageType = 'session'): boolean {
    return !isNull(WindowStorage.get(key, type));
  }

  static clear(type: WindowStorageType): void {
    if ( !type ) throw new Error('WindowStorage.clear: no argument provided');
    _getStorage(type).clear();
  }
}