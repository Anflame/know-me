import { Box, styled } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme: { palette } }) => ({
  background: palette.primary.dark,
  minHeight: '200px',
}));
