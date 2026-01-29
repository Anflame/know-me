import { localSource } from '@/utils/localSource';

describe('localSource util', () => {
  let setLocalStorageMock: jest.SpyInstance<void, [key: string, value: string], () => void>;
  let getLocalStorageMock: jest.SpyInstance<string | null, [key: string], () => string>;
  let removeLocalStorageMock: jest.SpyInstance<void, [key: string], () => void>;

  beforeEach(() => {
    setLocalStorageMock = jest.spyOn(Storage.prototype, 'setItem');
    getLocalStorageMock = jest.spyOn(Storage.prototype, 'getItem');
    removeLocalStorageMock = jest.spyOn(Storage.prototype, 'removeItem');
  });

  afterEach(() => jest.restoreAllMocks());

  it('setItem should call once', () => {
    const { set } = localSource();
    set('key', '9c27b0');
    expect(setLocalStorageMock).toHaveBeenCalledTimes(1);
    expect(setLocalStorageMock).toHaveBeenCalledWith('key', '9c27b0');
  });

  it('should get value', () => {
    getLocalStorageMock.mockReturnValue('9c27b0');
    const { get } = localSource();
    const key = get('key');

    expect(getLocalStorageMock).toHaveBeenCalledTimes(1);
    expect(getLocalStorageMock).toHaveBeenCalledWith('key');
    expect(key).toBe('9c27b0');
  });

  it('should remove item', () => {
    const { remove } = localSource();

    remove('key');

    expect(removeLocalStorageMock).toHaveBeenCalledWith('key');
    expect(removeLocalStorageMock).toHaveBeenCalledTimes(1);
  });
});
