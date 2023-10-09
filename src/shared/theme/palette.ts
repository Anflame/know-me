import { PaletteOptions } from '@mui/material/styles';

import { white, grey, red, main, green } from './colors';

export const base: PaletteOptions = {
  mode: 'dark',
  grey,
  divider: grey[2],
  success: {
    main: green.success,
  },
  error: {
    main: red.alert,
  },
};

export const customPalette: PaletteOptions = {
  primary: {
    main: main.main,
  },
  secondary: {
    main: main.alternative,
  },
  extra: {
    main: main.extra,
  },
  negative: {
    main: main.negative,
  },
  text: {
    primary: main.main,
    secondary: main.alternative,
  },
  common: {
    black: grey.black,
    white: white.main,
  },
  background: {
    default: main.background,
    paper: main.alternative,
  },
  error: {
    main: main.error,
  },
};
