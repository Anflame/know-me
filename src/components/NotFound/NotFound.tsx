import { FC } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Stack, useTheme, Button } from '@mui/material';

import { NotFoundIcon } from '@/static';
import { StyledWrapper } from './styles';

const NotFound: FC = () => {
  const { spacing } = useTheme();
  const { back } = useRouter();

  return (
    <Container>
      <StyledWrapper>
        <Stack justifyContent="center" gap={spacing(7)}>
          <Typography variant="h4">Страница не найдена</Typography>
          <Button onClick={back}>Вернутся</Button>
        </Stack>
        <NotFoundIcon width="500px" />
      </StyledWrapper>
    </Container>
  );
};

export default NotFound;
