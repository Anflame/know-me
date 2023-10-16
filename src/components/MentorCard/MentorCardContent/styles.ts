import { Typography, Stack, styled, alpha } from '@mui/material';

import type { MentorCardVariant } from '../types';

interface IStyledMentorsVariant {
  variant: keyof typeof MentorCardVariant;
}

export const StyledContent = styled(Stack)<IStyledMentorsVariant>(
  ({ theme: { spacing }, variant }) => ({
    flexDirection: 'column',
    cursor: 'pointer',
    background:
      variant === 'FullWidth'
        ? 'linear-gradient(45deg, rgba(94,14,207,1) 0%, rgba(94,14,207,1) 26%, rgba(14,19,47,1) 100%)'
        : 'linear-gradient(0deg, rgba(94,14,207,1) 0%, rgba(94,14,207,1) 15%, rgba(14,19,47,1) 100%)',
    padding:
      variant === 'FullWidth'
        ? `${spacing(2)} ${spacing(1)}`
        : `${spacing(2)} ${spacing(1)} ${spacing(6)}`,
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

export const StyledDescription = styled(Typography)(({ theme: { spacing } }) => ({
  marginTop: spacing(1),
  WebkitLineClamp: 5,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export const StyledTitle = styled(Typography)({
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});
