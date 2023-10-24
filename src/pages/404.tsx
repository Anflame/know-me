import { NextPage } from 'next';
import Link from 'next/link';
import { Container, Typography } from '@mui/material';

const Custom404: NextPage = () => {
  return (
    <Container>
      <Typography>Страница не найдена</Typography>
      <Link href="/">Вернутся на главную</Link>
    </Container>
  );
};

export default Custom404;
