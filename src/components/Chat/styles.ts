import { Box, IconButton, Stack, styled } from '@mui/material';

export const StyledWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  padding: `0 ${spacing(2)}`,
  width: '70%',
  justifyContent: 'flex-end',
  position: 'relative',
}));

export const StyledNotCheckedChatWrapper = styled(Box)({
  position: 'absolute',
  left: 'calc(50% - 53px)',
  top: `calc(50% - 24px)`,
});

export const StyledFormWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  display: 'flex',
  width: '100%',
  marginTop: spacing(4),
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export const StyledSendIcon = styled(IconButton)(({ theme: { spacing } }) => ({
  position: 'absolute',
  right: spacing(2),
  bottom: 0,
}));
