import React, { forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { AuthForm } from './AuthForm';
import { StyledContainer, StyledContent, StyledIconButton } from './styles';

type AuthProps = {
  isSignUp: boolean;
  onClose: () => void;
};

const Auth = forwardRef<HTMLDivElement, AuthProps>(({ isSignUp, onClose }) => (
  <StyledContainer>
    <StyledContent>
      <StyledIconButton onClick={onClose}>
        <CloseIcon color="primary" />
      </StyledIconButton>
      <AuthForm isSignUp={isSignUp} />
    </StyledContent>
  </StyledContainer>
));

export default Auth;
