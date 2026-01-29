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
  <Backdrop open={isOpen} onClick={onClose} data-testid="auth-backdrop">
    <StyledContent ref={ref} onClick={(e) => e.stopPropagation()} data-testid="auth-content">
      <StyledIconButton onClick={onClose} data-testid="auth-button-close">
        <CloseIcon color="primary" />
      </StyledIconButton>
      <AuthForm isSignUp={isSignUp} onClose={onClose} />
    </StyledContent>
  </Backdrop>
));

export default Auth;
