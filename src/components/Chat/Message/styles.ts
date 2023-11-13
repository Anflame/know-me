import { Box, Stack, styled } from '@mui/material';

export const StyledImageWrapper = styled(Box)(({ theme: { spacing } }) => ({
  width: spacing(5),
  height: spacing(5),
  borderRadius: '50%',
  position: 'relative',
  flexShrink: 0,
  alignSelf: 'flex-end',
}));

export const StyledContentWrapper = styled(Stack, {
  shouldForwardProp: (props) => props !== 'isCurrentUser',
})<{ isCurrentUser: boolean }>(({ theme: { spacing, palette }, isCurrentUser }) => ({
  flexDirection: 'row',
  gap: spacing(0.5),
  justifyContent: 'space-between',
  maxWidth: '50%',
  padding: spacing(1),
  borderRadius: spacing(1),
  background: isCurrentUser ? palette.negative?.main : palette.secondary.main,
}));
