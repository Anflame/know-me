import React, { FC, useContext } from 'react';
import FormTextField from '@/components/formElements/FormTextField';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FieldErrors } from 'react-hook-form';

import { authType, logInScheme, signUpScheme } from '@/shared/utils';
import { ErrorContext } from '@/shared/utils/errorContext';
import { StyledButton, StyledForm } from './styles';
import { useAuth } from './hooks';
import { ILoginForm, ISignUpForm } from './types';

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

  const { handleAuth, isLoading } = useAuth(isSignUp, showError);

  return (
    <StyledForm as="form" onSubmit={handleSubmit(handleAuth)}>
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
        type="password"
        fullWidth
        isError={!!errors.password}
        errorMessage={errors.password?.message}
      />
      <StyledButton fullWidth type="submit" disabled={isLoading}>
        {isSignUp ? 'SIGNUP' : 'LOGIN'}
      </StyledButton>
    </StyledForm>
  );
};

export default AuthForm;
