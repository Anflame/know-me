import React, { FC, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';
import { IconButton, InputAdornment, CircularProgress, Stack } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { FormTextField } from '@/ui-components';
import { authType, logInScheme, signUpScheme } from '@/utils';

import { useAuth } from './hooks';
import type { ILoginForm, ISignUpForm } from './types';
import { StyledButton } from './styles';

interface IAuthFormProps {
  isSignUp: boolean;
}

const AuthForm: FC<IAuthFormProps> = ({ isSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleAuth, isLoading } = useAuth(isSignUp);

  const customAuthConfig = {
    email: '',
    name: '',
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

  const typedSignUpErrors = errors as FieldErrors<ISignUpForm>;

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Stack component="form" onSubmit={handleSubmit(handleAuth)} width="100%">
      <FormTextField
        control={control}
        name="email"
        label="Email"
        placeholder="example@email.com"
        data-testid="email-field"
        fullWidth
        isError={!!errors.email}
        errorMessage={errors.email?.message}
      />
      {isSignUp && (
        <FormTextField
          control={control}
          name="name"
          label="Your Name"
          data-testid="name-field"
          placeholder="UserName"
          fullWidth
          isError={!!typedSignUpErrors.name}
          errorMessage={typedSignUpErrors.name?.message}
        />
      )}
      <FormTextField
        control={control}
        name="password"
        label="Password"
        placeholder="Password123"
        fullWidth
        data-testid="password-field"
        isError={!!errors.password}
        errorMessage={errors.password?.message}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={(e) => e.preventDefault()}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <StyledButton fullWidth type="submit" disabled={isLoading} data-testid="sendBtn">
        {isSignUp ? 'signUp' : 'login'}
        {isLoading && (
          <CircularProgress
            size="25px"
            style={{
              position: 'absolute',
            }}
          />
        )}
      </StyledButton>
    </Stack>
  );
};

export default AuthForm;
