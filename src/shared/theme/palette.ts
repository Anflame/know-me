import { PaletteOptions } from '@mui/material/styles';

import { white, grey, red, main, green } from './colors';

export const base: PaletteOptions = {
  mode: 'light',
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
    main: main.content,
  },
  secondary: {
    main: main.box,
  },
  extra: {
    main: main.extra,
  },
  text: {
    primary: main.box,
    secondary: main.content,
  },
  common: {
    black: grey.black,
    white: white.main,
  },
  background: {
    default: main.extra,
    paper: main.content,
  },
};
