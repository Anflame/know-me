import { FC } from 'react';
import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';

import { base, border, borderRadius, customPalette, themeConstants, spacing } from '../../theme';
import {
  MuiButtonOverride,
  MuiTextFieldOverride,
  MuiIconButtonOverride,
  MuiAccordionOverride,
} from '../../theme/components';

const baseTheme = {
  spacing,
  shape: { borderRadius },
  zIndex: {
    drawer: 1000,
  },
  border,
  constants: themeConstants,
};

const componentsOverride: ThemeOptions['components'] = {
  // MuiCssBaseline: {
  //   styleOverrides: normalizedFontFaces.join('\n'),
  // },
  ...MuiAccordionOverride,
  ...MuiIconButtonOverride,
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
