import { FC } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';

import {
  AuthContextProvider,
  CustomQueryClientProvider,
  CustomThemeProvider,
  ErrorContextProvider,
  GlobalAnimations,
} from '@/providers';
import { Layout } from '@/layouts/Layout';
import { GlobalOverride } from '@/styles';
import { NProgressHandler } from '@/components/NProgresHandler';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <CustomQueryClientProvider pageProps={pageProps}>
      <CssBaseline />
      <GlobalOverride />
      <GlobalAnimations />
      <AuthContextProvider>
        <ErrorContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorContextProvider>
      </AuthContextProvider>
      <NProgressHandler />
    </CustomQueryClientProvider>
  </CustomThemeProvider>
);

export default App;
