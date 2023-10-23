import { IconButton, Stack, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme: { breakpoints } }) => ({
  position: 'absolute',
  left: 0,
  [breakpoints.down('sm')]: {
    padding: 0,
  },
}));

export const StyledWrapper = styled(Stack)(({ theme: { spacing, breakpoints }, maxWidth }) => ({
  position: 'relative',
  padding: spacing(2),
  [breakpoints.down('sm')]: {
    maxWidth: maxWidth || '400px',
    margin: '0 auto',
  },
}));
