import { alpha } from '@mui/material';

const green = {
  success: '#82CF67',
};

const grey = {
  1: '#C5CBDD',
  2: '#9FADD2',
  3: alpha('#081B47', 0.48),
  4: alpha('#081B47', 0.16),
  5: alpha('#081B47', 0.64),
  6: alpha('#081B47', 0.24),
  shadow: alpha('#10196C', 0.2),
  black: '#000000',
};

const red = {
  alert: '#FF2D55',
};

const white = {
  main: '#FFFFFF',
  40: alpha('#FFFFFF', 0.4),
  16: alpha('#FFFFFF', 0.16),
  10: alpha('#FFFFFF', 0.1),
};

const main = {
  extra: '#9f0ec4',
  background: '#0e132f',
  box: '#7944e3',
  content: white.main,
  error: '#cf0837',
};

export { green, grey, red, white, main };
