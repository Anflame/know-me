import axios from 'axios';

import { localSource } from '@/utils';

import { parse } from 'qs';
import getTransformers from './transformers';

const defaultConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  transformResponse: getTransformers(axios),
};

const api = axios.create(defaultConfig);

api.interceptors.request.use((config) => {
  const { get } = localSource();
  const token = get('tokens') && parse(get('tokens') as string).access_token;

  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = token ? `Bearer ${token}` : '';

  return config;
});

export default api;
