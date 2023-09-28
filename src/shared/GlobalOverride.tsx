import React from 'react';
import { alpha, GlobalStyles, useTheme } from '@mui/material';

import { pxToRem } from './theme';

export const SCROLLBAR_SIZE = pxToRem(6);

export const GlobalOverride = () => {
  const { palette } = useTheme();

  return (
    <GlobalStyles
      styles={{
        html: {
          '& > body': {
            overflow: 'hidden',
          },
          '*::-webkit-scrollbar': {
            width: SCROLLBAR_SIZE,
            height: SCROLLBAR_SIZE,
            '&-track': {
              backgroundColor: 'transparent',
            },
            '&-thumb': {
              borderRadius: 8,
              backgroundColor: alpha(palette.text.secondary, 0.5),
              '&:hover': {
                backgroundColor: alpha(palette.text.secondary, 1),
              },
            },
          },
        },
        '::selection': {
          backgroundColor: alpha(palette.text.secondary, 0.2),
        },
      }}
    />
  );
};
