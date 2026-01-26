import type { IAuthConfig } from '@/types';
import { authType } from '@/utils';
import api from './instance';

export const fetchAuth = async (config: IAuthConfig) => {
  const apiURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await api.post(
    config.isSignUp ? `${apiURL}/auth/register` : `${apiURL}/auth/login`,
    {
      ...authType(config),
    }
  );

  return data;
};
