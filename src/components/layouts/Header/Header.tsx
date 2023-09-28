import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Typography, Button, useTheme, IconButton } from '@mui/material';

import { StyledHeader } from './styles';

const Header: FC = () => {
  const { spacing } = useTheme();
  const { push } = useRouter();

  return (
    <StyledHeader display="flex" width="inherit">
      <Container>
        <Box display="flex" justifyContent="space-between">
          <IconButton onClick={() => push('/')}>
            <Typography variant="h5" color="white">
              KNOW ME
            </Typography>
          </IconButton>
          <Box display="flex" gap={spacing(3)}>
            <Button variant="text">Login</Button>
            <Button variant="text">SignUp</Button>
          </Box>
        </Box>
      </Container>
    </StyledHeader>
  );
};

export default Header;
