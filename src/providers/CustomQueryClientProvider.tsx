import { AppProps } from 'next/app';
import React, { FC, ReactNode, useState } from 'react';
import { Hydrate, QueryClientProvider } from 'react-query';
import { factoryQueryClient } from '@/utils';

type TCustomQueryClientProviderProps = {
  children: ReactNode;
  pageProps: Pick<AppProps, 'pageProps'> & { dehydratedState: unknown };
};

const CustomQueryClientProvider: FC<TCustomQueryClientProviderProps> = ({
  children,
  pageProps,
}) => {
  const [queryClient] = useState(factoryQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </QueryClientProvider>
  );
};

export default CustomQueryClientProvider;
