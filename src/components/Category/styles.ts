import { IconButton, Stack, styled } from '@mui/material';

export const StyledTitleWrapper = styled(Stack)(({ theme: { spacing, typography } }) => ({
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
  borderBottomLeftRadius: spacing(1),
  background: 'linear-gradient(0deg, rgba(60,1,143,1) 0%, rgba(14,19,47,1) 70%)',
  maxWidth: '40%',
}));

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  left: '0',
});
