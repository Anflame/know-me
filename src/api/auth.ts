import type { IAuthConfig } from '@/types';
import { authType } from '@/shared/utils';
import api from './instance';

export const fetchAuth = (config: IAuthConfig) => {
  const res = api.post(config.isSignUp ? '/auth/register' : '/auth/login', {
    ...authType(config),
  });

  return res;
};
