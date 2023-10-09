import React, { FC, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, useTheme, IconButton, Modal, Stack } from '@mui/material';

import { Auth } from '@/components/Auth';
import { HeaderSwiper } from '@/components/HeaderSwiper';
import { MentorCard } from '@/components/MentorCard';
import { mentors } from '@/constants/mentors';

import { SearchPanel } from '@/components/SearchPanel';
import { IsSignUp } from './types';
import { StyledContainer, StyledWrapper, StyledImage } from './styles';

const Header: FC = () => {
  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const { spacing } = useTheme();

  const { push } = useRouter();

  const handleAuth = (type: keyof typeof IsSignUp) => {
    setIsSignUp(JSON.parse(IsSignUp[type]));
    handleToggleModal();
  };

  const handleToggleModal = () => setIsOpen((prev) => !prev);

  return (
    <StyledWrapper ref={rootRef}>
      <StyledImage src="/static/header-background.jpg" alt="background-image" fill priority />
      <StyledContainer>
        <Stack flexDirection="row" justifyContent="space-between">
          <IconButton onClick={() => push('/')}>
            <Typography variant="h5" color="primary" textTransform="uppercase">
              know me
            </Typography>
          </IconButton>
          <Stack flexDirection="row" gap={spacing(3)}>
            <Button variant="text" onClick={() => handleAuth('Login')}>
              login
            </Button>
            <Button variant="text" onClick={() => handleAuth('Signup')}>
              signUp
            </Button>
          </Stack>
        </Stack>
        <HeaderSwiper>
          {mentors.map((item) => (
            <MentorCard key={item.id} {...item} variant="Swiper" />
          ))}
        </HeaderSwiper>
        <SearchPanel />
      </StyledContainer>
      <Modal
        open={isOpen}
        onClose={handleToggleModal}
        disablePortal
        disableEnforceFocus
        container={() => rootRef.current}
      >
        <Auth isSignUp={isSignUp} onClose={handleToggleModal} isOpen={isOpen} />
      </Modal>
    </StyledWrapper>
  );
};

export default Header;
