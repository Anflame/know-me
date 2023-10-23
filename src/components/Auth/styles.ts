import { IconButton, Stack, styled, alpha } from '@mui/material';

export const StyledContent = styled(Stack)(({ theme: { spacing, breakpoints, palette } }) => ({
  position: 'relative',
  backgroundImage: `linear-gradient(0deg, ${alpha(palette.secondary.main, 1)} 0%, ${alpha(
    palette.secondary.main,
    1
  )} 15%, ${alpha(palette.background.default, 1)} 100%)`,
  padding: spacing(8.5),
  width: '500px',
  [breakpoints.down('sm')]: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
  },
  maxWidth: '100%',
  borderRadius: spacing(1),
  pointerEvents: 'all',
  zIndex: '10',
}));

export const StyledIconButton = styled(IconButton)(({ theme: { spacing, breakpoints } }) => ({
  position: 'absolute',
  height: spacing(5),
  width: spacing(5),
  top: spacing(2),
  right: spacing(2),

  [breakpoints.down('sm')]: {
    top: spacing(5),
  },

  svg: {
    width: 'inherit',
    height: 'inherit',
  },
}));
