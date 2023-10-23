import { Box, Stack, styled } from '@mui/material';

import { CustomImage } from '../CustomImage';

export const StyledImage = styled(CustomImage)(({ theme: { spacing } }) => ({
  borderRadius: spacing(2),
}));

export const StyledImageWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  width: 200,
  height: 300,
  [breakpoints.down('sm')]: {
    width: 150,
    height: 200,
  },
  position: 'relative',
  borderRadius: spacing(2),
  flexShrink: 0,
}));

export const StyledContent = styled(Stack)(({ theme: { spacing, breakpoints } }) => ({
  padding: spacing(2),
  [breakpoints.down('sm')]: {
    padding: `${spacing(2)} 0`,
    flexDirection: 'row',
    display: 'block',
  },
}));

export const StyledMainInfo = styled(Stack)(({ theme: { spacing } }) => ({
  float: 'left',
  marginRight: spacing(2),
}));
