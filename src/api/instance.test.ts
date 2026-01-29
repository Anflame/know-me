import type { AxiosStatic } from 'axios';

const mockUse = jest.fn();
const mockCreate = jest.fn();

const mockGet = jest.fn();
const mockLocalSource = jest.fn(() => ({ get: mockGet }));

jest.mock('axios', () => ({
  __esModule: true,
  default: {
    create: (...args: unknown[]) => mockCreate(...args),
    defaults: { transformResponse: [] } as Partial<Omit<AxiosStatic['defaults'], 'headers'>>,
  },
}));

jest.mock('@/utils', () => ({
  __esModule: true,
  localSource: () => mockLocalSource(),
}));

jest.mock('./transformers', () => ({
  __esModule: true,
  default: jest.fn(() => []),
}));

describe('api instance interceptor', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockCreate.mockReturnValue({
      interceptors: {
        request: {
          use: mockUse,
        },
      },
    });

    jest.isolateModules(() => {
      // eslint-disable-next-line global-require
      require('./instance');
    });
  });

  it('sets Authorization header when access_token exists', () => {
    mockGet.mockReturnValue('access_token=ABC123');

    const interceptor = mockUse.mock.calls[0][0] as (cfg: {
      headers: Record<string, string>;
    }) => never;

    const cfg = { headers: {} as Record<string, string> };
    interceptor(cfg);

    expect(cfg.headers.Authorization).toBe('Bearer ABC123');
  });

  it('sets empty Authorization header when token missing', () => {
    mockGet.mockReturnValue(undefined);

    const interceptor = mockUse.mock.calls[0][0] as (cfg: {
      headers: Record<string, string>;
    }) => never;

    const cfg = { headers: {} as Record<string, string> };
    interceptor(cfg);

    expect(cfg.headers.Authorization).toBe('');
  });
});
