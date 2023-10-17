import { FC } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { Layout } from '@/layouts/Layout';
import NextNProgress from 'nextjs-progressbar';

import {
  CustomQueryClientProvider,
  CustomThemeProvider,
  ErrorContextProvider,
} from '@/shared/utils';
import { GlobalOverride } from '@/shared/GlobalOverride';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <CustomQueryClientProvider pageProps={pageProps}>
      <CssBaseline />
      <GlobalOverride />
      <ErrorContextProvider>
        <NextNProgress color="#02d43a" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ErrorContextProvider>
    </CustomQueryClientProvider>
  </CustomThemeProvider>
);

export default App;
