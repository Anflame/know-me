import { FC } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

import {
  breakpoints,
  base,
  border,
  borderRadius,
  customPalette,
  themeConstants,
  spacing,
} from '../theme';
import { MuiButtonOverride, MuiTextFieldOverride } from '../theme/components';

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

const componentsOverride: ThemeOptions['components'] = {
  // MuiCssBaseline: {
  //   styleOverrides: normalizedFontFaces.join('\n'),
  // },
  ...MuiButtonOverride,
  ...MuiTextFieldOverride,
};

const theme = createTheme({
  ...baseTheme,
  palette: { ...base, ...customPalette },
  components: componentsOverride,
});

const CustomThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
