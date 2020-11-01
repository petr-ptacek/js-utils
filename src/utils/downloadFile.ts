/**
 * @param {string} fileName
 * @param {string} fileUrl
 * @returns {void}
 */
export function downloadFile({ fileName, fileUrl }: { fileName: string, fileUrl: string }): void {
  const link: HTMLAnchorElement = window.document.createElement('a');

  link.style.display = 'none';
  link.href = fileUrl;
  link.setAttribute('download', fileName);
  link.setAttribute('target', '_blank');

  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}