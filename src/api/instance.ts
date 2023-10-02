import axios from 'axios';

const defaultConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
};

const api = axios.create(defaultConfig);

// export const onRejectedResponse = async (payload: AxiosError) => {
//   const { response } = payload;

//   if (response?.status === 302) {
//     await router.push('/auth-page');
//     Cookies.remove('isAuth');
//   }

//   return Promise.reject(payload);
// };

// DefaultAPIInstance.interceptors.response.use(
//   (r) => r,
//   (error) => onRejectedResponse(error),
// );

export default api;
