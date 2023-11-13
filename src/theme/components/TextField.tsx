import {
  ThemeOptions,
  inputBaseClasses,
  formLabelClasses,
  outlinedInputClasses,
} from '@mui/material';

export const MuiTextFieldOverride: ThemeOptions['components'] = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard',
    },
    styleOverrides: {
      root: ({
        theme: { palette, spacing, breakpoints },
        ownerState: { variant, color, error },
      }) => ({
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
            [breakpoints.down('sm')]: {
              marginTop: spacing(5),
            },
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

        ...(variant === 'outlined' && {
          padding: 0,
          [`& .${inputBaseClasses.input}`]: {
            padding: `${spacing(1)} ${spacing(1)}`,
          },

          [`& .${formLabelClasses.root}`]: {
            top: 'auto',
            bottom: spacing(3),
          },

          [`& .${outlinedInputClasses.notchedOutline}`]: {
            border: color
              ? `1px solid ${palette[color!].main}`
              : `1px solid ${palette.primary.main}`,
          },
          [`& .${inputBaseClasses.root}`]: {
            '&:hover': {
              [`& .${outlinedInputClasses.notchedOutline}`]: {
                border: color
                  ? `1px solid ${palette[color!].main}`
                  : `1px solid ${palette.primary.main}`,
                filter: 'brightness(1.25)',
                ...(error && {
                  border: `1px solid ${palette.error.main}`,
                }),
              },
            },
          },
        }),
      }),
    },
  },
};
