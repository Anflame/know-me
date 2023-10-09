import React, { FC, useContext, useState } from 'react';
import { IconButton, InputAdornment, Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FormTextField } from '@/ui-components';
import { authType, logInScheme, signUpScheme } from '@/shared/utils';
import { ErrorContext } from '@/shared/utils/errorContext';

import { useAuth } from './hooks';
import type { ILoginForm, ISignUpForm } from './types';
import { StyledButton } from './styles';

interface IAuthFormProps {
  isSignUp: boolean;
}

const AuthForm: FC<IAuthFormProps> = ({ isSignUp }) => {
  const { showError } = useContext(ErrorContext);
  const customAuthConfig = {
    email: '',
    userName: '',
    password: '',
  };

  const defaultValues = authType({ ...customAuthConfig, isSignUp });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onChange',
    resolver: yupResolver<ILoginForm | ISignUpForm>(isSignUp ? signUpScheme : logInScheme),
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { handleAuth, isLoading } = useAuth(isSignUp, showError);

  return (
    <Stack component="form" onSubmit={handleSubmit(handleAuth)} width="100%">
      <FormTextField
        control={control}
        name="email"
        label="Email"
        placeholder="example@email.com"
        fullWidth
        isError={!!errors.email}
        errorMessage={errors.email?.message}
      />
      {isSignUp && (
        <FormTextField
          control={control}
          name="userName"
          label="Your Name"
          placeholder="UserName"
          fullWidth
          isError={!!(errors as FieldErrors<ISignUpForm>).userName}
          errorMessage={(errors as FieldErrors<ISignUpForm>).userName?.message}
        />
      )}
      <FormTextField
        control={control}
        name="password"
        label="Password"
        placeholder="Password123"
        fullWidth
        isError={!!errors.password}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <StyledButton fullWidth type="submit" disabled={isLoading}>
        {isSignUp ? 'SIGNUP' : 'LOGIN'}
      </StyledButton>
    </Stack>
  );
};

export default AuthForm;
