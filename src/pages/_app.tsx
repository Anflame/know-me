import { FC } from 'react';
import type { AppProps } from 'next/app';
import { CustomQueryClientProvider, CustomThemeProvider } from '@/shared/utils';
import { GlobalOverride } from '@/shared/GlobalOverride';
import { CssBaseline } from '@mui/material';
import { Layout } from '@/components/layouts/Layout';
import ErrorContextProvider from '@/shared/utils/Providers/ErrorContextProvider';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <CustomQueryClientProvider pageProps={pageProps}>
      <CssBaseline />
      <GlobalOverride />
      <ErrorContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorContextProvider>
    </CustomQueryClientProvider>
  </CustomThemeProvider>
);

export default App;
