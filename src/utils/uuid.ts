/**
 * @param {string} [message=""]
 * @returns {string}
 */
export const uuid: (message?: string) => string = ((id = 0) => {
  return (message = '') => `${ message }${ ++id }`;
})();
