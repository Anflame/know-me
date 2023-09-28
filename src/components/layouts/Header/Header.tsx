import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Typography, Button, useTheme, IconButton, Modal } from '@mui/material';

import { Auth } from '@/components/Auth';
import { StyledHeader } from './styles';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const rootRef = useRef(null);

  const { spacing } = useTheme();

  const { push } = useRouter();

  const handleAuth = (type: 'signUp' | 'logIn') => {
    if (type === 'signUp') {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
    handleToggleModal();
  };

  const handleToggleModal = () => setIsOpen((prev) => !prev);

  return (
    <StyledHeader display="flex" width="inherit" ref={rootRef}>
      <Container>
        <Box display="flex" justifyContent="space-between">
          <IconButton onClick={() => push('/')}>
            <Typography variant="h5" color="white">
              KNOW ME
            </Typography>
          </IconButton>
          <Box display="flex" gap={spacing(3)}>
            <Button variant="text" onClick={() => handleAuth('logIn')}>
              LOGIN
            </Button>
            <Button variant="text" onClick={() => handleAuth('signUp')}>
              SIGNUP
            </Button>
          </Box>
        </Box>
      </Container>
      <Modal
        open={isOpen}
        onClose={handleToggleModal}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        container={() => rootRef.current}
      >
        <Auth isSignUp={isSignUp} onClose={handleToggleModal} />
      </Modal>
    </StyledHeader>
  );
};

export default Header;
