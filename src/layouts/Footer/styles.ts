import { Box, Container, Stack, styled } from '@mui/material';

export const StyledFooter = styled(Box)(({ theme: { palette } }) => ({
  background: palette.primary.dark,
  minHeight: '200px',
}));

export const StyledContent = styled(Stack)({
  paddingTop: '40px',
  paddingBottom: '40px',
});

export const StyledContainer = styled(Container)({
  minHeight: 'inherit',
});
