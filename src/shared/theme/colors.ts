import { alpha } from '@mui/material';

const green = {
  success: '#82CF67',
};

const red = {
  alert: '#FF2D55',
};

const white = {
  main: '#FFFFFF',
  1: alpha('#FFFFFF', 0.1),
  4: alpha('#FFFFFF', 0.4),
  16: alpha('#FFFFFF', 0.16),
};

const main = {
  background: '#0e132f',
  main: white.main,
  alternative: '#5e0ecf',
  negative: '#9f0ec4',
  extra: '#158c4f',
  error: '#cf0837',
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

export { green, grey, red, white, main };
