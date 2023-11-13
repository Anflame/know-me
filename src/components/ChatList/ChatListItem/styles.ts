import { Stack, Box, styled } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme: { spacing, palette } }) => ({
  flexDirection: 'row',
  gap: spacing(2),
  borderBottom: palette.secondary.main,
  padding: `0 ${spacing(2)} ${spacing(3)}`,

  '&:last-of-type': {
    padding: `0 ${spacing(2)} 0`,
  },
  alignItems: 'center',
  position: 'relative',
}));

export const StyledImageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  width: spacing(6),
  height: spacing(6),
  position: 'relative',
  borderRadius: '50%',
  flexShrink: 0,
}));
