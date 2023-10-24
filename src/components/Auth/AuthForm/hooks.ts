import { useContext } from 'react';
import { fetchAuth } from '@/api/auth';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import type { IAuthConfig, ITOkens } from '@/types';
import { AuthContext, ErrorContext, localSource } from '@/utils';

import type { ILoginForm, ISignUpForm } from './types';

export const useAuth = (isSignUp: boolean) => {
  const { set } = localSource();
  const { showError } = useContext(ErrorContext);
  const { changeAuth } = useContext(AuthContext);
  const { isError, isLoading, mutate } = useMutation({
    mutationFn: (config: IAuthConfig) => {
      return fetchAuth(config);
    },
    onError: (error: AxiosError) => showError?.(error.message),
    onSuccess: (data) => saveAuthTokens(data),
  });

  const saveAuthTokens = (data?: ITOkens) => {
    if (data && 'access_token' in data && 'refresh_token' in data) {
      set('tokens', JSON.stringify(data));
      changeAuth(true);
    }
  };

  const handleAuth = async (validatedForm: ILoginForm | ISignUpForm) => {
    mutate({ ...validatedForm, isSignUp });
    // TODO: удалить после теста API
    set('tokens', JSON.stringify({ access_token: 'dsadadajkldjlajlkda' }));
    changeAuth(true);
  };

  return {
    handleAuth,
    isLoading,
    isError,
  };
};
