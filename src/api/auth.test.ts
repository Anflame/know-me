import { IAuthConfig } from '@/types';
import { fetchAuth } from '@/api/auth';
import { authType } from '@/utils';
import api from './instance';

jest.mock('@/utils', () => ({
  authType: jest.fn(),
}));

jest.mock('./instance', () => ({
  __esModule: true,
  default: {
    post: jest.fn(),
  },
}));

describe('api auth test', () => {
  const postMock = api.post as jest.Mock;

  const config: IAuthConfig = {
    isSignUp: true,
    password: '123',
    name: 'Im',
    email: 'email@mail.ru',
  };
  const { isSignUp, ...withoutSignUp } = config;

  beforeEach(() => {
    postMock.mockResolvedValue({
      data: [],
    });
    const mockAuthType = authType as jest.Mock;
    mockAuthType.mockReturnValue(withoutSignUp);
  });

  it('authType should be call with params', async () => {
    await fetchAuth(config);
    expect(authType).toHaveBeenCalledTimes(1);
    expect(authType).toHaveBeenCalledWith(config);
  });

  it('should call register', async () => {
    await fetchAuth(config);
    expect(postMock).toHaveBeenCalledTimes(1);
    expect(postMock).toHaveBeenCalledWith('undefined/auth/signup', withoutSignUp);
  });

  it('should call signUp', async () => {
    await fetchAuth({ ...config, isSignUp: false });
    expect(postMock).toHaveBeenCalledWith('undefined/auth/login', withoutSignUp);
  });
});
