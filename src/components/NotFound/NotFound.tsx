import { FC } from 'react';
import { Container, Typography, Stack, useTheme, Button } from '@mui/material';

import { NotFoundIcon } from '@/static';

import { StyledWrapper } from './styles';

const NotFound: FC = () => {
  const { spacing } = useTheme();

  return (
    <Container>
      <StyledWrapper>
        <Stack justifyContent="center" gap={spacing(7)}>
          <Typography variant="h4">Страница не найдена</Typography>
          <Button>Вернутся</Button>
        </Stack>
        <NotFoundIcon width="500px" />
      </StyledWrapper>
    </Container>
  );
};

export default NotFound;
