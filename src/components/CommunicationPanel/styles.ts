import { Stack, styled, alpha } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme: { palette, spacing } }) => ({
  flexDirection: 'row',
  position: 'absolute',
  left: spacing(1),
  bottom: spacing(1),
  borderRadius: spacing(1.5),
  background: alpha(palette.background.default, 0.8),
}));
