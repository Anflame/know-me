import { Box, styled } from '@mui/material';

export const StyledLayout = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const StyledMain = styled(Box)(() => ({
  display: 'flex',
  width: 'inherit',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 'auto',
}));
