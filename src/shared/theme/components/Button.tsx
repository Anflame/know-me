import { ThemeOptions } from '@mui/material';

export const MuiButtonOverride: ThemeOptions['components'] = {
  MuiButton: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme: { palette, spacing }, ownerState: { variant } }) => ({
        fontSize: '1rem',
        lineHeight: '1.625rem',
        textAlign: 'center',
        textTransform: 'none',

        ...(variant === 'outlined' && {
          border: '1px solid transparent',
          color: palette.primary.main,
          '&:before': {
            content: `""`,
            position: 'absolute',
            width: '15%',
            height: '100%',
            inset: '0 0',
            borderLeft: `1px solid ${palette.primary.main}`,
            borderTop: `1px solid ${palette.primary.main}`,
            borderBottom: `1px solid ${palette.primary.main}`,
            borderTopLeftRadius: spacing(0.5),
            borderBottomLeftRadius: spacing(0.5),
            transition: 'width 1s',
          },
          '&:after': {
            content: `""`,
            position: 'absolute',
            width: '15%',
            height: '100%',
            right: '0',
            top: '0',
            borderRight: `1px solid ${palette.primary.main}`,
            borderTop: `1px solid ${palette.primary.main}`,
            borderBottom: `1px solid ${palette.primary.main}`,
            borderTopRightRadius: spacing(0.5),
            borderBottomRightRadius: spacing(0.5),
            transition: 'width 1.5s',
          },
          '&:hover': {
            color: palette.common.white,
            border: '1px solid transparent',
            background: 'transparent',
            '&:before': {
              width: '100%',
            },
            '&:after': {
              width: '100%',
            },
          },
        }),

        ...(variant === 'text' && {
          minWidth: 'auto',
          padding: '0 !important',
          [`&:before`]: {
            content: `""`,
            position: 'absolute',
            bottom: 0,
            width: '0%',
            borderBottom: `1px solid ${palette.primary.main}`,
            transition: 'width 0.5s',
          },
          [`&:hover`]: {
            background: 'transparent',
            [`&:before`]: {
              width: '100%',
            },
          },
        }),
      }),
      text: {
        fontWeight: 300,
      },
      outlined: {
        fontWeight: 300,
      },
      contained: {
        fontWeight: 400,
      },
    },
    variants: [
      {
        props: { variant: 'text' },
        style: {},
      },
    ],
  },
};
