import { IAuthConfig } from '@/types';
import { createContext } from 'react';

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

interface IAuthContext {
  isAuth: boolean;
  changeAuth: (isAuth: boolean) => void;
}

export const defaultAuthContext: IAuthContext = {
  isAuth: false,
  changeAuth: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);
