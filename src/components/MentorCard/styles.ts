import { styled, Stack } from '@mui/material';
import Image from 'next/image';

import { MentorCardVariant } from './types';

interface IMentorCardVariant {
  variant: keyof typeof MentorCardVariant;
}

export const StyledWrapper = styled(Stack)<IMentorCardVariant>(
  ({ theme: { palette, spacing }, variant }) => ({
    color: palette.text.secondary,
    flexDirection: 'column',
    height: variant === 'FullWidth' ? '250px' : '100%',
    position: 'relative',
    overflow: 'hidden',
    boxSizing: 'border-box',
    borderRadius: spacing(2),
  })
);

export const StyledImage = styled(Image)<IMentorCardVariant>(({ theme: { spacing }, variant }) => ({
  borderTopLeftRadius: spacing(2),
  borderTopRightRadius: variant === 'FullWidth' ? 0 : spacing(2),
  borderBottomRightRadius: variant === 'FullWidth' ? 0 : spacing(2),
  borderBottomLeftRadius: spacing(2),
  width: '200%',
  height: 'inherit',
  objectFit: variant === 'FullWidth' ? 'contain' : 'cover',
  objectPosition: variant === 'FullWidth' ? 'left' : 'top',
}));
