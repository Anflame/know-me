import { createContext } from 'react';

interface IAuthContext {
  isAuth: boolean;
  changeAuth: (isAuth: boolean) => void;
}

export const defaultAuthContext: IAuthContext = {
  isAuth: false,
  changeAuth: () => {},
};

export const AuthContext = createContext<IAuthContext>(defaultAuthContext);
