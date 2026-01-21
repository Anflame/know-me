import { Stack, Box, styled, alpha } from '@mui/material';

export const StyledTitleWrapper = styled(Stack)(({ theme: { spacing, typography, palette } }) => ({
  margin: '0 auto',
  position: 'fixed',
  right: '0',
  bottom: '0',
  zIndex: 9,
  writingMode: 'vertical-lr',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: typography.h6.fontSize,
  gap: spacing(2),
  padding: spacing(1),
  borderTopLeftRadius: spacing(1),
  backgroundImage: `linear-gradient(0deg, ${alpha(palette.secondary.main, 1)} 0%, ${alpha(
    palette.background.default,
    1
  )} 70%)`,
  maxWidth: '40%',
}));

export const StyledMentorWrapper = styled(Box)<{ index: number }>(({ index }) => ({
  animation: `slideUp 0.4s ${index * 0.08}s both`,
  opacity: 0,
  transform: 'translateY(20px)',
}));
