import { IconButton, Stack, styled } from '@mui/material';

export const StyledContent = styled(Stack)(
  ({
    theme: {
      palette: {
        secondary: { main },
      },
      spacing,
    },
  }) => ({
    position: 'relative',
    background: main,
    padding: '70px',
    width: '500px',
    maxWidth: '100%',
    borderRadius: spacing(1),
    pointerEvents: 'all',
    zIndex: '10',
  })
);

export const StyledIconButton = styled(IconButton)({
  position: 'absolute',
  top: '15px',
  right: '15px',
});
