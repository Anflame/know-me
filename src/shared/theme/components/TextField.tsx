import { ThemeOptions, inputBaseClasses } from '@mui/material';

export const MuiTextFieldOverride: ThemeOptions['components'] = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: ({ theme: { palette, spacing }, ownerState: { variant } }) => ({
        fontSize: '1.125rem',
        lineHeight: '1.625rem',
        textAlign: 'center',
        textTransform: 'none',

        ...(variant === 'standard' && {
          input: {
            color: palette.primary.main,
          },
          '&:not(:first-of-type)': {
            marginTop: spacing(3),
          },
          [`& .${inputBaseClasses.root}`]: {
            '&:before': {
              borderBottom: `1px solid ${palette.grey[2]}`,
            },
            '&:hover:before': {
              borderBottom: `2px solid ${palette.grey[2]} !important`,
            },
          },
          [`&:hover .${inputBaseClasses.root}`]: {
            '&:before': {
              borderBottom: `1px solid ${palette.primary.main}`,
            },
          },
        }),
      }),
    },
  },
};
