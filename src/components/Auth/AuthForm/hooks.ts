import { fetchAuth } from '@/api/auth';
import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import { setCookie } from 'cookies-next';

import type { IAuthConfig } from '@/types';

import type { ILoginForm, ISignUpForm } from './types';

export const useAuth = (isSignUp: boolean, showError?: (error: string) => void) => {
  const { isError, isLoading, mutate, data } = useMutation({
    mutationFn: (config: IAuthConfig) => {
      return fetchAuth(config);
    },
    onError: (error: AxiosError) => showError?.(error.message),
  });

  const handleAuth = (validatedForm: ILoginForm | ISignUpForm) => {
    mutate({ ...validatedForm, isSignUp });
    if (data && 'accessToken' in data && 'refreshToken' in data) {
      setCookie('tokens', JSON.stringify(data));
    }
  };

  return {
    handleAuth,
    isLoading,
    isError,
    data,
  };
};
