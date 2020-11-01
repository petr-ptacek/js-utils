import { downloadFile } from '@/index';

describe.only('Utils: downloadFile', () => {

  let anchorElement: HTMLAnchorElement = null,
      spyCreateEl: jest.SpyInstance,
      spyAppendChild: jest.SpyInstance,
      spyRemoveChild: jest.SpyInstance;

  const fileName = 'JavaScript.pdf';
  const fileUrl = `/path/to/${ fileName }`;

  beforeAll(() => {
    spyAppendChild = jest.spyOn(window.document.body, 'appendChild');
    spyRemoveChild = jest.spyOn(window.document.body, 'removeChild');
  });

  beforeEach(() => {
    if ( spyCreateEl ) spyCreateEl.mockRestore();
    anchorElement = window.document.createElement('a');

    jest.spyOn(anchorElement, 'click');
    jest.spyOn(anchorElement, 'setAttribute');

    spyCreateEl = jest.spyOn(window.document, 'createElement')
        .mockReturnValue(anchorElement);

    downloadFile({ fileName, fileUrl });
  });

  it('The link element is created', () => {
    expect(spyCreateEl).toHaveBeenCalledWith('a');
  });

  it('The fileName is set', () => {
    expect(anchorElement.download).toBe(fileName);
  });

  it('The fileUrl is set', () => {
    expect(anchorElement.href).toBe(`${ window.location.origin }${ fileUrl }`);
  });

  it('The link is append to the body', () => {
    expect(spyAppendChild).toHaveBeenCalledWith(anchorElement);
  });

  it('The link is removed from the body', () => {
    expect(spyRemoveChild).toHaveBeenCalledWith(anchorElement);
  });

  it('The link click action is called', () => {
    expect(anchorElement.click).toHaveBeenCalledTimes(1);
  });
});