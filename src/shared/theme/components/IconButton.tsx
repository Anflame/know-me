import { ThemeOptions } from '@mui/material';

export const MuiIconButtonOverride: ThemeOptions['components'] = {
  MuiIconButton: {
    styleOverrides: {
      root: {
        height: 'inherit',
        '&:hover': {
          background: 'transparent',
        },
        '& svg:hover': {
          filter: 'brightness(1.5)',
        },
      },
    },
  },
};
