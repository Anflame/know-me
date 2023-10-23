import {
  Box,
  Button,
  Stack,
  SwipeableDrawer,
  Typography,
  paperClasses,
  styled,
  alpha,
} from '@mui/material';

export const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme: { palette } }) => ({
  [`& .${paperClasses.root}`]: {
    backgroundImage: `linear-gradient(45deg, ${alpha(palette.secondary.main, 1)} 0%, ${alpha(
      palette.background.default,
      1
    )} 100%)`,
  },
}));

export const StyledWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  position: 'absolute',
  [breakpoints.down('sm')]: {
    position: 'relative',
  },
  right: 0,
}));

export const StyledHeading = styled(Typography)({
  textDecoration: 'underline',
  textAlign: 'center',
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
export const StyledFilterGroups = styled(Stack)(({ theme: { spacing } }) => ({
  maxHeight: `calc(100vh - ${spacing(9)})`,
  width: '250px',
  overflow: 'auto',
  padding: `${spacing(2)} 0`,
}));
