import { ThemeOptions } from '@mui/material';

export const MuiIconButtonOverride: ThemeOptions['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        height: 'inherit',
        '&:hover': {
          background: 'transparent',
          p: {
            filter: 'brightness(1.5)',
          },
          svg: {
            filter: 'brightness(1.5)',
          },
        },
      },
    },
  },
};
