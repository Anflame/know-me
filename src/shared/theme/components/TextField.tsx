import { ThemeOptions, inputBaseClasses } from '@mui/material';

export const MuiTextFieldOverride: ThemeOptions['components'] = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: ({ theme: { palette, spacing }, ownerState: { variant, color } }) => ({
        fontSize: '1.125rem',
        lineHeight: '1.625rem',
        textAlign: 'center',
        textTransform: 'none',

        ...(variant === 'standard' && {
          label: {
            color: palette.primary.main,
          },
          '&:not(:first-of-type)': {
            marginTop: spacing(3),
          },
          [`& .${inputBaseClasses.root}`]: {
            '&:before': {
              borderBottom: `1px solid ${
                color === 'primary' ? palette.grey[2] : palette[color!].main
              }`,
            },
            '&:hover:before': {
              borderBottom: `2px solid ${
                color === 'primary' ? palette.grey[2] : palette[color!].main
              } !important`,
            },
          },
          [`&:hover .${inputBaseClasses.root}`]: {
            '&:before': {
              borderBottom: `1px solid ${
                color === 'primary' ? palette.primary.main : palette[color!].main
              }`,
            },
          },
        }),
      }),
    },
  },
};
