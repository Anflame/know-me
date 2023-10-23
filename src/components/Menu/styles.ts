import { IconButton, Stack, SwipeableDrawer, paperClasses, styled, alpha } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme: { palette } }) => ({
  [`& .${paperClasses.root}`]: {
    backgroundImage: `linear-gradient(45deg, ${alpha(palette.secondary.main, 1)} 0%, ${alpha(
      palette.background.default,
      1
    )} 100%)`,
  },
}));

export const StyledWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  gap: spacing(5),
  padding: spacing(4),
  width: '250px',
}));

export const StyledIconButton = styled(IconButton)(({ theme: { spacing } }) => ({
  position: 'absolute',
  top: spacing(4),
  right: spacing(3),
  height: spacing(5),
}));

export const StyledCloseIcon = styled(CloseIcon)(({ theme: { spacing } }) => ({
  height: spacing(5),
  width: spacing(5),
}));

export const StyledMenuIcon = styled(MenuIcon)(({ theme: { spacing } }) => ({
  height: spacing(5),
  width: spacing(5),
}));
