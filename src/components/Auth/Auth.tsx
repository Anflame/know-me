import React, { forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Backdrop } from '@mui/material';

import { AuthForm } from './AuthForm';
import { StyledContent, StyledIconButton } from './styles';

type AuthProps = {
  isSignUp: boolean;
  onClose: () => void;
  isOpen: boolean;
};

const Auth = forwardRef<HTMLDivElement, AuthProps>(({ isSignUp, onClose, isOpen }, ref) => (
  <Backdrop open={isOpen} onClick={onClose}>
    <StyledContent ref={ref} onClick={(e) => e.stopPropagation()}>
      <StyledIconButton onClick={onClose}>
        <CloseIcon color="primary" />
      </StyledIconButton>
      <AuthForm isSignUp={isSignUp} />
    </StyledContent>
  </Backdrop>
));

export default Auth;
