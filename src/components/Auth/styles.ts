import { Box, IconButton, styled } from '@mui/material';

export const StyledContent = styled(Box)(
  ({
    theme: {
      palette: {
        secondary: { main },
      },
      spacing,
    },
  }) => ({
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: main,
    padding: '70px',
    width: '500px',
    maxWidth: '100%',
    borderRadius: spacing(1),
    pointerEvents: 'all',
  })
);

export const StyledContainer = styled(Box)({
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  pointerEvents: 'none',
});

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: '15px',
  right: '15px',
});
