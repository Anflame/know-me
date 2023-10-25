import { Stack, styled } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  flexDirection: 'row',
  margin: '0 auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacing(6),
}));
