import { Box, styled } from '@mui/material';
import Image from 'next/image';

export const StyledHeader = styled(Box)(() => ({
  minHeight: '500px',
  padding: '20px',
  position: 'relative',
  background:
    'linear-gradient(180deg, rgba(121,68,227,1) 0%, rgba(18,24,59,1) 56%, rgba(18,24,59,1) 100%)',
}));

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    background: main,
    padding: '70px',
    width: '30%',
    borderRadius: spacing(1),
  })
);

export const StyledContainer = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const StyledImage = styled(Image)({
  display: 'block',
  transform: 'rotate(180deg)',
  filter: 'alpha(opacity=75)',
  opacity: '0.2',
});
