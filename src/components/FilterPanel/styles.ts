import { Box, Button, Stack, SwipeableDrawer, paperClasses, styled } from '@mui/material';

export const StyledSwipeableDrawer = styled(SwipeableDrawer)({
  [`& .${paperClasses.root}`]: {
    background: 'linear-gradient(45deg, rgba(60,1,143,1) 0%, rgba(14,19,47,1) 100%)',
  },
});

export const StyledButtonWrapper = styled(Box)(({ theme: { spacing } }) => ({
  position: 'absolute',
  left: spacing(2),
  bottom: spacing(2),
  width: `calc(100% - ${spacing(4)})`,
}));

export const StyledButton = styled(Button)(({ theme: { spacing } }) => ({
  height: spacing(4),
  textTransform: 'none',
}));

export const StyledWrapper = styled(Box)({
  position: 'absolute',
  left: 0,
});

export const StyledFilterGroups = styled(Stack)(({ theme: { spacing } }) => ({
  maxHeight: `calc(100vh - ${spacing(9)})`,
  overflow: 'auto',
  padding: `${spacing(2)} 0`,
}));
