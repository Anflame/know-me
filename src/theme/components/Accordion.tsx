import { ThemeOptions, accordionSummaryClasses } from '@mui/material';

export const MuiAccordionOverride: ThemeOptions['components'] = {
  MuiAccordion: {
    defaultProps: {
      variant: 'outlined',
    },
    styleOverrides: {
      root: ({ theme: { spacing, palette }, ownerState: { variant } }) => ({
        ...(variant === 'filters' && {
          '&:not(:first-of-type)': {
            borderTop: `1px solid ${palette.primary.main}`,
          },
          [`& .${accordionSummaryClasses.root}`]: {
            padding: `0 ${spacing(1)}`,
          },
        }),
      }),
    },
    variants: [
      {
        props: { variant: 'filters' },
        style: {
          background: 'transparent !important',
          margin: '0 !important',
          padding: 0,

          [`& .${accordionSummaryClasses.content}`]: {
            margin: 0,
          },

          [`& .${accordionSummaryClasses.root}`]: {
            '& .Mui-expanded': {
              margin: '0 !important',
              minHeight: 'auto !important',
            },
          },
        },
      },
    ],
  },
};
