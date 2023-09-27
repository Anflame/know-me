import { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  breakpoints,
  base,
  border,
  borderRadius,
  customPalette,
  themeConstants,
  spacing,
} from '../theme';

const baseTheme = {
  spacing,
  shape: { borderRadius },
  zIndex: {
    drawer: 1000,
  },
  border,
  constants: themeConstants,
  breakpoints,
};

const theme = createTheme({
  ...baseTheme,
  palette: { ...base, ...customPalette },
});

const CustomThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
