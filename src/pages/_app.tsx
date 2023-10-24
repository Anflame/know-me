import { FC } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import NextNProgress from 'nextjs-progressbar';

import {
  AuthContextProvider,
  CustomQueryClientProvider,
  CustomThemeProvider,
  ErrorContextProvider,
} from '@/providers';
import { Layout } from '@/layouts/Layout';
import { GlobalOverride } from '@/styles';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <CustomQueryClientProvider pageProps={pageProps}>
      <CssBaseline />
      <GlobalOverride />
      <AuthContextProvider>
        <ErrorContextProvider>
          <NextNProgress color="#02d43a" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorContextProvider>
      </AuthContextProvider>
    </CustomQueryClientProvider>
  </CustomThemeProvider>
);

export default App;
