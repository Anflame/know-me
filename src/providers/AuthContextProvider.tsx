import { FC, ReactNode, useState, useCallback, useMemo, useEffect } from 'react';

import { localSource, AuthContext, defaultAuthContext } from '@/utils';

interface IErrorContextProviderProps {
  children: ReactNode;
}

const AuthContextProvider: FC<IErrorContextProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(defaultAuthContext.isAuth);
  const { get } = localSource() || {};

  const changeAuth = useCallback((newAuthState: boolean) => {
    setIsAuth(newAuthState);
  }, []);

  const contextProviderValue = useMemo(
    () => ({
      isAuth,
      changeAuth,
    }),
    [isAuth, changeAuth]
  );

  useEffect(() => {
    if (get?.('tokens')) setIsAuth(true);
  }, [get]);

  return <AuthContext.Provider value={contextProviderValue}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
