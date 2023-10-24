import axios from 'axios';

import { localSource } from '@/utils';
import { ITOkens } from '@/types';

import getTransformers from './transformers';

const defaultConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  transformResponse: getTransformers(axios),
};

const api = axios.create(defaultConfig);

api.interceptors.request.use((config) => {
  const { get } = localSource();
  const token = get('tokens') && (JSON.parse(get('tokens') as string) as ITOkens).access_token;
  const auth = token ? `Bearer ${token}` : '';

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = auth;

  return config;
});

export default api;
