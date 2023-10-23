import { FC, useState } from 'react';
import { IconButton, Typography, Button } from '@mui/material';

import { IsSignUp, Login, SignUp } from '@/types';

import {
  StyledCloseIcon,
  StyledIconButton,
  StyledMenuIcon,
  StyledSwipeableDrawer,
  StyledWrapper,
} from './styles';

interface IMenuProps {
  handleAuth: (type: IsSignUp) => void;
}

const Menu: FC<IMenuProps> = ({ handleAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpen(true)}>
        <StyledMenuIcon />
      </IconButton>

      <StyledSwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <StyledIconButton onClick={() => setIsOpen(false)}>
          <StyledCloseIcon />
        </StyledIconButton>
        <StyledWrapper>
          <Button variant="text" onClick={() => handleAuth(Login)}>
            <Typography variant="h5">login</Typography>
          </Button>
          <Button variant="text" onClick={() => handleAuth(SignUp)}>
            <Typography variant="h5">signup</Typography>
          </Button>
        </StyledWrapper>
      </StyledSwipeableDrawer>
    </>
  );
};

export default Menu;
