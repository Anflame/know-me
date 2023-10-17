import { Typography, styled } from '@mui/material';

export const StyledTitle = styled(Typography)(({ theme: { spacing, palette } }) => ({
  paddingBottom: spacing(0.3),
  color: palette.primary.main,
}));
