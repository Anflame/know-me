import { IAuthConfig } from '@/types';

export const authType = (config: IAuthConfig) => {
  const authConfig: Omit<IAuthConfig, 'isSignUp'> = {
    email: config.email,
    password: config.password,
  };

  if (config.isSignUp) {
    authConfig.name = config.name;
  }

  return authConfig;
};
