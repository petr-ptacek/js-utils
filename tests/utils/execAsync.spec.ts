import { execAsync } from '@/index';

describe('Utils: execAsync', () => {

  it('Success', async () => {
    const { data, error } = await execAsync(Promise.resolve('success'));

    expect(data).toBe('success');
    expect(error).toBeNull();
  });

  it('Failure', async () => {
    const { data, error } = await execAsync(Promise.reject(new Error('Danger Error')));

    expect(data).toBeNull();
    expect(error).toEqual(expect.any(Error));
    expect(error.message).toBe('Danger Error');
  });
});