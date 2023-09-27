import type { AppProps } from 'next/app';
import { CustomQueryClientProvider, CustomThemeProvider } from '@/shared/utils';
import { GlobalOverride } from '@/shared/GlobalOverride';
import { CssBaseline } from '@mui/material';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <CustomQueryClientProvider pageProps={pageProps}>
        <CssBaseline />
        <GlobalOverride />
        <Component {...pageProps} />
      </CustomQueryClientProvider>
    </CustomThemeProvider>
  );
};

export default App;
