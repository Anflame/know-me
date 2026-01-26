import { IAuthConfig } from '@/types';
import { authType } from '@/utils/auth/authType';

describe('auth test', () => {
  const config: IAuthConfig = {
    email: '1',
    password: '123456',
    name: 'John Doe',
    isSignUp: false,
  };

  const { isSignUp, name, ...items } = config;

  it('signUp', () => {
    expect(authType(config)).toEqual(items);
  });

  it('logIn', () => {
    expect(authType({ ...config, isSignUp: true })).toEqual({ ...items, name });
  });

  it('signup без name не крашится', () => {
    const { name: withoutNameName, ...withoutName } = config;
    expect(authType(withoutName)).toEqual(items);
  });
});
