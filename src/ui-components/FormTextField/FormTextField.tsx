import { Controller, FieldValues } from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';

import type { IFormTextField } from '../types';
import { StyledAlert } from './styles';

const FormTextField = <T extends FieldValues>({
  control,
  name,
  isError,
  fullWidth,
  handleChangeShowPassword,
  errorMessage,
  ...args
}: IFormTextField<T> & TextFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => (
      <>
        <TextField
          error={isError}
          onChange={onChange}
          value={value}
          fullWidth={fullWidth}
          {...args}
        />
        {isError && <StyledAlert severity="error">{errorMessage}</StyledAlert>}
      </>
    )}
  />
);

export default FormTextField;
