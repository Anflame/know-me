import { Box, styled } from '@mui/material';

import { CustomImage } from '../CustomImage';

export const StyledImage = styled(CustomImage)(({ theme: { spacing } }) => ({
  borderRadius: spacing(2),
}));

export const StyledImageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  width: 200,
  height: 300,
  position: 'relative',
  borderRadius: spacing(2),
  flexShrink: 0,
}));
