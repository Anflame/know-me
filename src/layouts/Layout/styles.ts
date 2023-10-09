import { Stack, styled } from '@mui/material';

export const StyledLayout = styled(Stack)({
  width: '100%',
  minHeight: '100vh',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledMain = styled(Stack)({
  width: 'inherit',
  alignItems: 'center',
  padding: '30px 0',
});
