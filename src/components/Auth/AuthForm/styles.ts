import { styled, Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme: { spacing, breakpoints } }) => ({
  marginTop: spacing(4),
  [breakpoints.down('sm')]: {
    marginTop: spacing(6),
  },
}));
