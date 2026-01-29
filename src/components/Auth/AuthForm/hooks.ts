import { useContext } from 'react';
import { fetchAuth } from '@/api/auth';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { stringify } from 'qs';

import type { IAuthConfig, ITOkens } from '@/types';
import { AuthContext, AlertContext, localSource } from '@/utils';

import type { ILoginForm, ISignUpForm } from './types';

export const useAuth = (isSignUp: boolean, onClose: () => void) => {
  const { set } = localSource();
  const { showAlert } = useContext(AlertContext);
  const { changeAuth } = useContext(AuthContext);
  const { isError, isLoading, mutate } = useMutation({
    mutationFn: (config: IAuthConfig) => fetchAuth(config),
    onError: (error: AxiosError) => showAlert?.(error.message, 'error'),
    onSuccess: (data) => saveAuthTokens(data),
  });

  const saveAuthTokens = (data?: ITOkens) => {
    if (data && 'accessToken' in data && 'refreshToken' in data) {
      set('tokens', stringify(data));
      changeAuth(true);
      onClose();
      showAlert('Авторизация прошла успешна', 'success');
    }
  };

  const handleAuth = async (validatedForm: ILoginForm | ISignUpForm) => {
    mutate({ ...validatedForm, isSignUp });
  };

  return {
    handleAuth,
    isLoading,
    isError,
  };
};
