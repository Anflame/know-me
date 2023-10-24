import { QueryClient, QueryClientConfig } from 'react-query';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
};

const factoryQueryClient = () => new QueryClient(queryClientConfig);

export default factoryQueryClient;
