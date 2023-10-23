import { Stack, styled } from '@mui/material';

export const StyledLayout = styled(Stack)({
  width: '100%',
  minHeight: '100vh',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const StyledMain = styled(Stack)(({ theme: { spacing, breakpoints } }) => ({
  width: 'inherit',
  alignItems: 'center',
  padding: `${spacing(4)} 0`,
  [breakpoints.down('sm')]: {
    padding: `${spacing(2)} 0`,
  },
}));
