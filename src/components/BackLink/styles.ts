import { IconButton, Stack, styled } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme: { breakpoints } }) => ({
  width: '79px',
  [breakpoints.down('sm')]: {
    padding: 0,
  },
}));

export const StyledWrapper = styled(Stack)(({ theme: { breakpoints }, maxWidth }) => ({
  position: 'relative',
  [breakpoints.down('sm')]: {
    maxWidth: maxWidth || '400px',
    margin: '0 auto',
  },
}));
