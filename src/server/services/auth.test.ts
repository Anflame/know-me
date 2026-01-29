import { checkAuth } from '@/server/services/auth';
import { IAuthConfig } from '@/types';

describe('service: auth', () => {
  const user: Omit<IAuthConfig, 'isSignUp'> = {
    email: 'aa@mail.ru',
    password: 'aA123456',
    name: 'aa',
  };
  const correctUser: Omit<IAuthConfig, 'isSignUp' | 'name'> = {
    email: 'anflame@mail.ru',
    password: 'Aa123456',
  };

  it('should return true for signUp', () => {
    expect(checkAuth(user, 'SignUp')).toBe(true);
  });

  it('should return false for signup', () => {
    expect(checkAuth(correctUser, 'SignUp')).toBe(false);
  });

  it('should return false for login', () => {
    expect(checkAuth(user, 'Login')).toBe(false);
  });

  it('should return true for login', () => {
    expect(checkAuth(correctUser, 'Login')).toBe(true);
  });
});
