import { styled, Stack, Typography, alpha } from '@mui/material';
import Image from 'next/image';

import { MentorCardVariant } from './types';

interface IStyledMentorsVariant {
  variant: keyof typeof MentorCardVariant;
}

export const StyledInfo = styled(Stack)(({ theme: { palette } }) => ({
  position: 'absolute',
  flexDirection: 'row',
  gap: '5px',
  justifyContent: 'center',
  alignItems: 'center',
  bottom: '0',
  right: '0',
  width: '100%',
  height: '100%',
  zIndex: 3,
  background: alpha(palette.secondary.main, 0.72),
  marginRight: '-100%',
  transition: 'all 0.5s',
}));

export const StyledWrapper = styled(Stack)<IStyledMentorsVariant>(
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

export const StyledContent = styled(Stack)<IStyledMentorsVariant>(
  ({ theme: { spacing }, variant }) => ({
    flexDirection: 'column',
    cursor: 'pointer',
    justifyContent: 'space-around',
    background:
      variant === 'FullWidth'
        ? 'linear-gradient(45deg, rgba(94,14,207,1) 0%, rgba(94,14,207,1) 26%, rgba(14,19,47,1) 100%)'
        : 'linear-gradient(0deg, rgba(94,14,207,1) 0%, rgba(94,14,207,1) 15%, rgba(14,19,47,1) 100%)',
    padding: spacing(1),
    position: 'absolute',
    bottom: variant === 'FullWidth' ? 'auto' : 0,
    top: variant === 'FullWidth' ? 0 : 'auto',
    right: 0,
    height: variant === 'FullWidth' ? '100%' : 'auto',
    width: variant === 'FullWidth' ? '51.5%' : '100%',
    borderBottomLeftRadius: variant === 'FullWidth' ? 0 : spacing(2),
    borderTopRightRadius: variant === 'FullWidth' ? spacing(2) : 0,
    borderBottomRightRadius: spacing(2),
    overflow: 'hidden',

    ...(variant === 'FullWidth' && {
      '&:hover': {
        '& > .MuiStack-root': {
          marginRight: '0',
        },
      },
    }),
  })
);

export const StyledImage = styled(Image)<IStyledMentorsVariant>(
  ({ theme: { spacing }, variant }) => ({
    borderTopLeftRadius: spacing(2),
    borderTopRightRadius: variant === 'FullWidth' ? 0 : spacing(2),
    borderBottomRightRadius: variant === 'FullWidth' ? 0 : spacing(2),
    borderBottomLeftRadius: spacing(2),
    width: '200%',
    height: 'inherit',
    objectFit: variant === 'FullWidth' ? 'contain' : 'cover',
    objectPosition: variant === 'FullWidth' ? 'left' : 'top',
  })
);

export const StyledDescription = styled(Typography)({
  WebkitLineClamp: 6,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

export const StyledCommunicationWrapper = styled(Stack)(({ theme: { palette, spacing } }) => ({
  flexDirection: 'row',
  position: 'absolute',
  left: spacing(1),
  bottom: spacing(1),
  borderRadius: spacing(1.5),
  background: alpha(palette.background.default, 0.8),
}));
