import { IAuthConfig, IsSignUp } from '@/types';

export const checkAuth = (user: Omit<IAuthConfig, 'isSignUp'>, type: keyof typeof IsSignUp) => {
  if (type === 'Login' && user.email === 'anflame@mail.ru' && user.password === 'Aa123456')
    return true;

  return !!(type === 'SignUp' && user.name && user.password && user.email);
};
