import { QueryClient, QueryClientConfig } from 'react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
};

export const factoryQueryClient = () => new QueryClient(queryClientConfig);
