import Head from 'next/head';
import { Button, Grid, TextField, inputBaseClasses, styled } from '@mui/material';

const Home = () => (
  <>
    <Head>
      <title>Know-me</title>
      <meta name="description" content="Know-me" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <StyledMain>
      <StyledContent>
        <StyledTextField fullWidth variant="standard" />
        <StyledTextField fullWidth variant="standard" />
        <StyledButton variant="outlined" color="secondary" fullWidth>
          Send
        </StyledButton>
      </StyledContent>
    </StyledMain>
  </>
);

export default Home;

const StyledMain = styled(Grid)(({ theme: { spacing } }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
  padding: spacing(6),
}));

const StyledContent = styled(Grid)(
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

const StyledTextField = styled(TextField)(({ theme: { spacing, palette } }) => ({
  input: {
    color: palette.primary.main,
  },
  '&:not(:first-of-type)': {
    marginTop: spacing(3),
  },
  [`& .${inputBaseClasses.root}`]: {
    '&:before': {
      borderBottom: `1px solid ${palette.grey[2]}`,
    },
    '&:hover:before': {
      borderBottom: `2px solid ${palette.grey[2]} !important`,
    },
  },
  [`&:hover .${inputBaseClasses.root}`]: {
    '&:before': {
      borderBottom: `1px solid ${palette.primary.main}`,
    },
  },
}));

const StyledButton = styled(Button)(({ theme: { palette, spacing } }) => ({
  border: '1px solid transparent',
  color: palette.primary.main,
  marginTop: spacing(4),
  '&:before': {
    content: `""`,
    position: 'absolute',
    width: '15%',
    height: '100%',
    inset: '0 0',
    borderLeft: `1px solid ${palette.primary.main}`,
    borderTop: `1px solid ${palette.primary.main}`,
    borderBottom: `1px solid ${palette.primary.main}`,
    borderTopLeftRadius: spacing(0.5),
    borderBottomLeftRadius: spacing(0.5),
    transition: 'width 2s',
  },
  '&:after': {
    content: `""`,
    position: 'absolute',
    width: '15%',
    height: '100%',
    right: '0',
    top: '0',
    borderRight: `1px solid ${palette.primary.main}`,
    borderTop: `1px solid ${palette.primary.main}`,
    borderBottom: `1px solid ${palette.primary.main}`,
    borderTopRightRadius: spacing(0.5),
    borderBottomRightRadius: spacing(0.5),
    transition: 'width 2s',
  },
  '&:hover': {
    color: palette.common.white,
    border: '1px solid transparent',
    background: 'transparent',
    '&:before': {
      width: '100%',
      transition: 'width 2s',
    },
    '&:after': {
      width: '100%',
      transition: 'width 2s',
    },
  },
}));
