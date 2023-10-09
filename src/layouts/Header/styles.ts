import { Container, Stack, styled } from '@mui/material';
import Image from 'next/image';

export const StyledWrapper = styled(Stack)(() => ({
  minHeight: '500px',
  padding: '20px 20px 0',
  position: 'relative',
  width: 'inherit',
  background:
    'linear-gradient(180deg, rgba(121,68,227,1) 0%, rgba(18,24,59,1) 56%, rgba(18,24,59,1) 100%)',
}));

export const StyledContent = styled(Stack)(
  ({
    theme: {
      palette: {
        secondary: { main },
      },
      spacing,
    },
  }) => ({
    background: main,
    padding: '70px',
    width: '30%',
    borderRadius: spacing(1),
  })
);

export const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'space-between',
});

export const StyledImage = styled(Image)({
  display: 'block',
  filter: 'alpha(opacity=75)',
  opacity: '0.2',
});
