import Head from 'next/head';
import { Button, TextField, Box, styled, Container, Stack } from '@mui/material';
import { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Know-me</title>
      <meta name="description" content="Know-me" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Container>
      <Stack justifyContent="center" alignItems="center" direction="column">
        <StyledContent display="flex">
          <TextField fullWidth />
          <TextField fullWidth />
          <Button fullWidth>Отправить</Button>
        </StyledContent>
      </Stack>
    </Container>
  </>
);

export default Home;

const StyledContent = styled(Box)(
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
