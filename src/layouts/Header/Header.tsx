import React, { FC, useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import {
  useMediaQuery,
  Typography,
  Button,
  useTheme,
  IconButton,
  Modal,
  Stack,
  Box,
} from '@mui/material';

import { Auth } from '@/components/Auth';
import { HeaderSwiper } from '@/components/HeaderSwiper';
import { MentorCard } from '@/components/MentorCard';
import { SearchPanel } from '@/components/SearchPanel';
import { FilterPanel } from '@/components/FilterPanel';
import { BackLink } from '@/components/BackLink';
import { Menu } from '@/components/Menu';
import { filters } from '@/constants/filters';
import { mentors } from '@/constants/mentors';
import { IsSignUp, Login, SignUp } from '@/types';
import { AuthContext, localSource } from '@/utils';

import { StyledContainer, StyledWrapper, StyledImage, StyledPanelsWrapper } from './styles';
import { getIsSignUp } from './utils';

const Header: FC = () => {
  const rootRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { spacing } = useTheme();
  const { remove } = localSource();
  const { push, pathname } = useRouter();
  const { changeAuth, isAuth } = useContext(AuthContext);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleAuth = (type: IsSignUp) => {
    setIsSignUp(getIsSignUp(type));
    handleToggleModal();
  };

  const handleToggleModal = () => setIsOpen((prev) => !prev);

  const logOut = () => {
    remove('tokens');
    changeAuth(false);
  };

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
          {isMobile ? (
            <Menu handleAuth={handleAuth} />
          ) : (
            <Stack flexDirection="row" gap={spacing(3)}>
              {!isAuth ? (
                <>
                  <Button variant="text" onClick={() => handleAuth(Login)}>
                    <Typography>login</Typography>
                  </Button>
                  <Button variant="text" onClick={() => handleAuth(SignUp)}>
                    <Typography>signUp</Typography>
                  </Button>
                </>
              ) : (
                <Button variant="text" onClick={logOut}>
                  <Typography>logout</Typography>
                </Button>
              )}
            </Stack>
          )}
        </Stack>
        <HeaderSwiper>
          {mentors.map((item) => (
            <MentorCard key={item.id} {...item} variant="Swiper" />
          ))}
        </HeaderSwiper>
        {pathname === '/' ? (
          <StyledPanelsWrapper>
            <SearchPanel />
            <FilterPanel filterGroups={filters} />
          </StyledPanelsWrapper>
        ) : (
          <Box position="relative" width="100%" mt={spacing(8)}>
            <BackLink fullWidth={pathname === '/mentor/[...id]'} />
          </Box>
        )}
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
