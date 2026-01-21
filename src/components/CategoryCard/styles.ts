import { Box, Stack, Typography, styled } from '@mui/material';
import Link from 'next/link';

import { CustomImage } from '../CustomImage';

export const StyledWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  position: 'relative',
  border: `1px solid ${palette.secondary.main}`,
  cursor: 'pointer',
  width: 'inherit',
  height: 'inherit',
  borderRadius: '10px',
  padding: spacing(2),
  aspectRatio: '500/400',
  boxShadow: `0px 0px 0px ${palette.secondary.main}`,
  transform: `translateY(${spacing(0)})`,
  transition: 'all 0.3s',

  '&:hover': {
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

export const StyledImage = styled(CustomImage)({
  filter: 'opacity(25%)',
});

export const StyledLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
});

export const StyledArticle = styled('article')<{ index: number }>(({ index }) => ({
  animation: `slideUp 0.4s ${index * 0.08}s both`,
  opacity: 0,
  transform: 'translateY(20px)',
}));
