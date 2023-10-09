import { styled, Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme: { spacing } }) => ({
  marginTop: spacing(4),
}));
