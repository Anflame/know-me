import { ThemeOptions } from '@mui/material';

export const MuiContainerOverride: ThemeOptions['components'] = {
  MuiContainer: {
    styleOverrides: {
      root: ({ theme: { breakpoints, spacing } }) => ({
        margin: '0 auto',

        [breakpoints.up('sm')]: {
          padding: `0 ${spacing(4)}`,
        },

        [breakpoints.up('xl')]: {
          maxWidth: '1440px',
        },
      }),
    },
  },
};
