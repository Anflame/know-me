import { Box, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';

export const StyledWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  position: 'relative',
  border: `1px solid ${palette.secondary.main}`,
  cursor: 'pointer',
  borderRadius: '10px',
  padding: spacing(2),
  width: 'inherit',
  height: 'inherit',
  aspectRatio: '500/400',
  boxShadow: `0px 0px 0px ${palette.secondary.main}`,
  transform: `translateY(${spacing(0)})`,
  transition: 'all 0.3s',

  [`&:hover`]: {
    transform: `translateY(-${spacing(1)})`,
    boxShadow: `5px 5px 5px ${palette.secondary.main}`,
  },
}));

export const StyledContent = styled(Stack)(({ theme: { spacing } }) => ({
  position: 'absolute',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  top: '0',
  left: '0',
  padding: spacing(2),
}));

export const StyledDescription = styled(Typography)({
  alignSelf: 'flex-end',
  width: '50%',
});

export const StyledImage = styled(Image)(({ theme: { spacing } }) => ({
  borderRadius: spacing(2),
  opacity: '0.4',
}));
