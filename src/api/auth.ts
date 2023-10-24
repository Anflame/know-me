import type { IAuthConfig } from '@/types';
import { authType } from '@/utils';
import api from './instance';

export const fetchAuth = async (config: IAuthConfig) => {
  const { data } = await api.post(config.isSignUp ? '/oauth/register' : '/oauth/login', {
    ...authType(config),
  });

  return data;
};
