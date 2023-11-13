import { styled, Drawer, paperClasses, Stack, IconButton } from '@mui/material';

export const StyledDrawer = styled(Drawer)(({ theme: { palette } }) => ({
  [`& .${paperClasses.root}`]: {
    background: palette.background.default,
  },
}));

export const StyledWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  flexDirection: 'row',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  padding: `${spacing(4)} 0 ${spacing(2)}`,
}));

export const StyledCloseBtn = styled(IconButton)(({ theme: { spacing } }) => ({
  position: 'absolute',
  width: spacing(4),
  height: spacing(4),
  top: spacing(1),
  right: spacing(1),
}));
