import { InputHTMLAttributes } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { TextField } from '@mui/material';

import type { TFormTextField } from './types';

const FormTextField = <T extends FieldValues>({
  control,
  label,
  name,
  size,
  color,
  isError,
  errorMessage,
  fullWidth,
  handleChangeShowPassword,
  ...args
}: TFormTextField<T> & InputHTMLAttributes<HTMLInputElement>) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange } }) => (
      <TextField
        fullWidth={fullWidth}
        error={isError}
        label={label}
        onChange={onChange}
        value={value}
        size={size}
        color={color}
        {...args}
      />
    )}
  />
);

export default FormTextField;
