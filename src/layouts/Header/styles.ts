import { Container, Stack, styled } from '@mui/material';
import Image from 'next/image';

export const StyledWrapper = styled(Stack)(({ theme: { spacing } }) => ({
  minHeight: '500px',
  padding: `${spacing(3)} 0 0`,
  position: 'relative',
  width: 'inherit',
  // нужен именно такой цвет (отличается от палитры)
  backgroundImage: `linear-gradient(180deg, rgba(121,68,227,1) 0%, rgba(18,24,59,1) 56%, rgba(18,24,59,1) 100%)`,
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

export const StyledPanelsWrapper = styled(Stack)(({ theme: { spacing, breakpoints } }) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  gap: spacing(1),
  alignItems: 'flex-end',
  width: '100%',
  margin: `${spacing(8)} 0 0`,
  [breakpoints.down('sm')]: {
    maxWidth: '400px',
    margin: `${spacing(8)} auto 0`,
  },
  position: 'relative',
}));
