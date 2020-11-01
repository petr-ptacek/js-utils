const _uuid: (message?: string) => string =
    (function (id = 0) {
      return function (message = '') {
        return `${ message }${ ++id }`;
      };
    })();

export function uuid(message: string = ''): string {
  return _uuid(message);
}