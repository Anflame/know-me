import { styled, Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme: { spacing }, disabled }) => ({
  marginTop: spacing(6),
  ...(disabled && {
    color: 'transparent !important',
    border: '1px solid transparent !important',
    '&:before': {
      border: '1px solid transparent',
    },
    '&:after': {
      border: '1px solid transparent',
    },
  }),
}));
