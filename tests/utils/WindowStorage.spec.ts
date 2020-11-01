import { WindowStorage } from '@/index';

describe('Utils: WindowStorage', () => {

  describe('(session type)', () => {
    afterEach(() => {
      window.sessionStorage.clear();
    });

    it('WindowStorage.get', () => {
      spyOn(WindowStorage, 'get').and.callThrough();
      spyOn(Storage.prototype, 'getItem').and.callThrough();

      expect(WindowStorage.get('name')).toBe(null);
      expect(window.sessionStorage.getItem).toBeCalledWith('name');

      window.sessionStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.get('name')).toBe('Joe Doe');
      expect(window.sessionStorage.getItem).toBeCalledWith('name');
    });

    it('WindowStorage.set', () => {
      spyOn(WindowStorage, 'set').and.callThrough();
      spyOn(Storage.prototype, 'setItem').and.callThrough();

      WindowStorage.set('name', 'Joe Doe');

      expect(window.sessionStorage.setItem).toBeCalledWith('name', 'Joe Doe');
      expect(window.sessionStorage.getItem('name')).toBe('Joe Doe');
    });

    it('WindowStorage.remove', () => {
      spyOn(WindowStorage, 'get').and.callThrough();
      spyOn(Storage.prototype, 'removeItem').and.callThrough();

      window.sessionStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.remove('name')).toBe('Joe Doe');
      expect(WindowStorage.get).toBeCalledWith('name', 'session');
      expect(window.sessionStorage.removeItem).toBeCalledWith('name');
      expect(window.sessionStorage.getItem('name')).toBe(null);

      expect(WindowStorage.remove('name')).toBe(null);
      expect(WindowStorage.get).toBeCalledWith('name', 'session');
      expect(window.sessionStorage.removeItem).toBeCalledWith('name');
      expect(window.sessionStorage.getItem('name')).toBe(null);
    });

    it('WindowStorage.has', () => {
      spyOn(WindowStorage, 'get').and.callThrough();

      expect(WindowStorage.has('name')).toBeFalsy();
      expect(WindowStorage.get).toBeCalledWith('name', 'session');

      window.sessionStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.has('name')).toBeTruthy();
      expect(WindowStorage.get).toBeCalledWith('name', 'session');
    });

    it('WindowStorage.clear', () => {
      spyOn(Storage.prototype, 'clear').and.callThrough();

      // @ts-ignore
      expect(() => WindowStorage.clear())
          .toThrow(
              'WindowStorage.clear: no argument provided'
          );

      WindowStorage.clear('session');
      expect(window.sessionStorage.clear).toBeCalled();
    });
  });

  describe('(local type)', () => {
    afterEach(() => {
      window.localStorage.clear();
    });

    it('WindowStorage.get', () => {
      spyOn(WindowStorage, 'get').and.callThrough();
      spyOn(Storage.prototype, 'getItem').and.callThrough();

      expect(WindowStorage.get('name', 'local')).toBe(null);
      expect(window.localStorage.getItem).toBeCalledWith('name');

      window.localStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.get('name', 'local')).toBe('Joe Doe');
      expect(window.localStorage.getItem).toBeCalledWith('name');
    });

    it('WindowStorage.set', () => {
      spyOn(WindowStorage, 'set').and.callThrough();
      spyOn(Storage.prototype, 'setItem').and.callThrough();

      WindowStorage.set('name', 'Joe Doe', 'local');

      expect(window.localStorage.setItem).toBeCalledWith('name', 'Joe Doe');
      expect(window.localStorage.getItem('name')).toBe('Joe Doe');
    });

    it('WindowStorage.remove', () => {
      spyOn(WindowStorage, 'get').and.callThrough();
      spyOn(Storage.prototype, 'removeItem').and.callThrough();

      window.localStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.remove('name', 'local')).toBe('Joe Doe');
      expect(WindowStorage.get).toBeCalledWith('name', 'local');
      expect(window.localStorage.removeItem).toBeCalledWith('name');
      expect(window.localStorage.getItem('name')).toBe(null);

      expect(WindowStorage.remove('name', 'local')).toBe(null);
      expect(WindowStorage.get).toBeCalledWith('name', 'local');
      expect(window.localStorage.removeItem).toBeCalledWith('name');
      expect(window.localStorage.getItem('name')).toBe(null);
    });

    it('WindowStorage.has', () => {
      spyOn(WindowStorage, 'get').and.callThrough();

      expect(WindowStorage.has('name', 'local')).toBeFalsy();
      expect(WindowStorage.get).toBeCalledWith('name', 'local');

      window.localStorage.setItem('name', 'Joe Doe');

      expect(WindowStorage.has('name', 'local')).toBeTruthy();
      expect(WindowStorage.get).toBeCalledWith('name', 'local');
    });

    it('WindowStorage.clear', () => {
      spyOn(Storage.prototype, 'clear').and.callThrough();

      // @ts-ignore
      expect(() => WindowStorage.clear())
          .toThrow(
              'WindowStorage.clear: no argument provided'
          );

      WindowStorage.clear('local');
      expect(window.localStorage.clear).toBeCalled();
    });
  });
});