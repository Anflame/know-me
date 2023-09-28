import React, { forwardRef } from 'react';
import { Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { StyledContainer, StyledContent, StyledIconButton } from './styles';

type AuthProps = {
  isSignUp: boolean;
  onClose: () => void;
};

const Auth = forwardRef<HTMLDivElement, AuthProps>(({ isSignUp, onClose }) => (
  <StyledContainer>
    <StyledContent display="flex">
      <StyledIconButton onClick={onClose}>
        <CloseIcon color="primary" />
      </StyledIconButton>
      {isSignUp && <TextField fullWidth placeholder="example@mail.ru" />}
      <TextField fullWidth placeholder="Your NickName" />
      <TextField fullWidth placeholder="Your Password" />
      <Button fullWidth>{isSignUp ? 'SIGNUP' : 'LOGIN'}</Button>
    </StyledContent>
  </StyledContainer>
));

export default Auth;
